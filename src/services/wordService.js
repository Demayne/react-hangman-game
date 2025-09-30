/**
 * wordService.js
 * Service for loading and selecting random words from dictionary
 * Uses Create React App asset handling to fetch dictionary file
 */

import dictionaryUrl from "../assets/dictionary.txt";

/**
 * Load dictionary words from text file
 * Filters out empty lines and non-alphabetic words
 * @returns {Promise<string[]>} Array of valid words
 */
export async function loadDictionaryWords() {
  const response = await fetch(dictionaryUrl);
  const text = await response.text();
  return text
    .split(/\r?\n/)
    .map((w) => w.trim())
    .filter((w) => w.length > 0 && /^[a-zA-Z]+$/.test(w));
}

/**
 * Get a random word from the dictionary
 * Returns fallback word if dictionary is empty
 * @returns {Promise<string>} Random word in lowercase
 */
export async function getRandomWord() {
  const words = await loadDictionaryWords();
  if (words.length === 0) {
    return "react"; // fallback word
  }
  const index = Math.floor(Math.random() * words.length);
  return words[index].toLowerCase();
}


