/**
 * Keyboard.jsx
 * Renders an on-screen keyboard for letter input
 * Uses map() to generate buttons for each letter
 * Handles user interaction and visual feedback
 */
import React, { useMemo } from "react";
import { useHangmanContext } from "../context/HangmanContext";
import "../css/Keyboard.css";

// Generate array of letters a-z
const LETTERS = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

/**
 * Keyboard component
 * Interactive keyboard with visual feedback for guessed letters
 * Each button has unique key and responds to user clicks
 */
export default function Keyboard() {
  // Get game state and functions from context
  const { guessedLetters, incorrectLetters, guessLetter, status } = useHangmanContext();
  const disabled = status !== "playing";

  // Combine all used letters (correct and incorrect)
  const used = useMemo(() => {
    const s = new Set(incorrectLetters);
    for (const g of guessedLetters) s.add(g);
    return s;
  }, [guessedLetters, incorrectLetters]);

  return (
    <div className="keyboard">
      {LETTERS.map((l) => {
        const isUsed = used.has(l);
        return (
          <button
            key={l}
            onClick={() => guessLetter(l)}
            disabled={disabled || isUsed}
            className="key-btn"
          >
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}


