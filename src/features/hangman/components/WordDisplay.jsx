/**
 * WordDisplay.jsx
 * Renders the target word with underscores for unguessed letters
 * Reveals letters as they are correctly guessed
 */
import React from "react";
import { useHangmanContext } from "../context/HangmanContext";
import "../css/WordDisplay.css";

/**
 * WordDisplay component
 * Shows the word being guessed with visual feedback
 * Uses map() to render each letter with unique keys
 */
export default function WordDisplay() {
  // Get game state from context
  const { targetWord, guessedLetters, status } = useHangmanContext();
  
  return (
    <div className="word-display">
      {targetWord.split("").map((ch, idx) => {
        const revealed = status !== "playing" || guessedLetters.has(ch);
        return (
          <span key={`${ch}-${idx}`} className="word-letter">
            {revealed ? ch.toUpperCase() : ""}
          </span>
        );
      })}
    </div>
  );
}


