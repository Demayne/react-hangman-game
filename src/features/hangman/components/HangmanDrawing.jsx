/**
 * HangmanDrawing.jsx
 * Displays the hangman drawing based on number of incorrect guesses
 * Uses dynamic require to load appropriate image from assets
 */
import React, { useMemo } from "react";
import "../css/HangmanDrawing.css";
import { useHangmanContext } from "../context/HangmanContext";

/**
 * HangmanDrawing component
 * Renders the hangman image corresponding to current mistake count
 * Images progress from state1.GIF to state11.GIF as mistakes increase
 */
export default function HangmanDrawing() {
  // Get incorrect letters from context
  const { incorrectLetters } = useHangmanContext();
  
  // Calculate current drawing step (1-11)
  const step = useMemo(() => Math.min(incorrectLetters.length + 1, 11), [incorrectLetters.length]);
  
  // Dynamically load appropriate image file
  // Uses try-catch to handle missing files gracefully
  const imgSrc = useMemo(() => {
    try {
      // Handle different file naming conventions
      const file = step === 10 ? "state10.gif" : step === 11 ? "state11.GIF" : `state${step}.GIF`;
      return require(`../../../assets/hangmandrawings/${file}`);
    } catch (e) {
      return null;
    }
  }, [step]);

  // Return null if image couldn't be loaded
  if (!imgSrc) return null;
  
  return <img src={imgSrc} alt={`Hangman step ${step}`} className="hangman-image" />;
}


