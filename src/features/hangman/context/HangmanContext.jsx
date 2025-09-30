/**
 * HangmanContext.jsx
 * Provides global state management for the Hangman game
 * Uses React Context API to share game state across components
 */
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getRandomWord } from "../../../services/wordService";

// Create context for sharing game state
const HangmanContext = createContext(null);

/**
 * HangmanProvider component
 * Wraps the app to provide game state to all child components
 * Manages: word selection, letter guessing, game status, win/loss conditions
 */
export function HangmanProvider({ children }) {
  // Maximum allowed mistakes before game over (based on available drawing steps)
  const maxMistakes = 10;
  
  // Game state variables
  const [targetWord, setTargetWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [incorrectLetters, setIncorrectLetters] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | playing | won | lost

  // Normalize target word to lowercase for consistent comparison
  const normalizedTarget = useMemo(() => targetWord.toLowerCase(), [targetWord]);

  /**
   * Restart game function
   * Resets all game state and loads a new random word
   */
  const restartGame = useCallback(async () => {
    setStatus("loading");
    setGuessedLetters(new Set());
    setIncorrectLetters([]);
    const word = await getRandomWord();
    setTargetWord(word);
    setStatus("playing");
  }, []);

  // Initialize game on component mount
  useEffect(() => {
    restartGame();
  }, [restartGame]);

  /**
   * Handle letter guessing logic
   * @param {string} letter - The letter being guessed
   */
  const guessLetter = useCallback(
    (letter) => {
      // Only allow guessing during active gameplay
      if (status !== "playing") return;
      
      // Normalize and validate input
      const l = String(letter).toLowerCase();
      if (!/^[a-z]$/.test(l)) return;
      
      // Prevent duplicate guesses
      if (guessedLetters.has(l) || incorrectLetters.includes(l)) return;

      // Check if letter is in target word
      if (normalizedTarget.includes(l)) {
        // Correct guess - add to guessed letters
        const next = new Set(guessedLetters);
        next.add(l);
        setGuessedLetters(next);
      } else {
        // Incorrect guess - add to incorrect letters
        setIncorrectLetters((prev) => [...prev, l]);
      }
    },
    [guessedLetters, incorrectLetters, normalizedTarget, status]
  );

  /**
   * Check win/loss conditions after each guess
   */
  useEffect(() => {
    if (status !== "playing") return;
    
    // Win condition: all unique letters in target are guessed
    const uniqueLetters = new Set(normalizedTarget.split(""));
    let allIn = true;
    for (const ch of uniqueLetters) {
      if (!guessedLetters.has(ch)) {
        allIn = false;
        break;
      }
    }
    
    if (allIn && normalizedTarget.length > 0) {
      setStatus("won");
      return;
    }
    
    // Loss condition: too many incorrect guesses
    if (incorrectLetters.length >= maxMistakes) {
      setStatus("lost");
    }
  }, [guessedLetters, incorrectLetters, maxMistakes, normalizedTarget, status]);

  // Memoize context value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      maxMistakes,
      targetWord: normalizedTarget,
      guessedLetters,
      incorrectLetters,
      status,
      guessLetter,
      restartGame,
    }),
    [guessedLetters, incorrectLetters, maxMistakes, normalizedTarget, restartGame, status]
  );

  return <HangmanContext.Provider value={value}>{children}</HangmanContext.Provider>;
}

/**
 * Custom hook to access Hangman context
 * @returns {Object} Hangman game state and functions
 * @throws {Error} If used outside of HangmanProvider
 */
export function useHangmanContext() {
  const ctx = useContext(HangmanContext);
  if (!ctx) throw new Error("useHangmanContext must be used within HangmanProvider");
  return ctx;
}


