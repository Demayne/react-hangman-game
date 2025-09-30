/**
 * useLocalStorage.js
 * Custom hook for managing localStorage state
 * Provides a React state interface for localStorage values
 */

import { useState, useEffect } from 'react';

/**
 * useLocalStorage hook
 * Manages localStorage state with React state synchronization
 * @param {string} key - localStorage key
 * @param {*} initialValue - Initial value if key doesn't exist
 * @returns {Array} [value, setValue] - Current value and setter function
 */
export function useLocalStorage(key, initialValue) {
  // Get value from localStorage or use initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Update localStorage when state changes
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
}
