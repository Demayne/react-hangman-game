/**
 * AppContext.jsx
 * Global application context
 * Provides app-wide state management for global settings
 */

import React, { createContext, useContext, useState } from 'react';

// Create context for global app state
const AppContext = createContext(null);

/**
 * AppProvider component
 * Provides global application state to child components
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
export function AppProvider({ children }) {
  // Global app state
  const [theme, setTheme] = useState('light');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [highScore, setHighScore] = useState(0);

  const value = {
    theme,
    setTheme,
    soundEnabled,
    setSoundEnabled,
    highScore,
    setHighScore
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

/**
 * useAppContext hook
 * Access global application context
 * @returns {Object} Global app state and functions
 * @throws {Error} If used outside of AppProvider
 */
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
}

