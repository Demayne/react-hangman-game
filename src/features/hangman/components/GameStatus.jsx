/**
 * GameStatus.jsx
 * Displays current game status, mistake count, and win/loss messages
 * Provides restart functionality
 */
import React from "react";
import { useHangmanContext } from "../context/HangmanContext";
import "../css/GameStatus.css";

/**
 * GameStatus component
 * Shows game progress and outcome with clear user feedback
 * Handles restart game functionality
 */
export default function GameStatus() {
  // Get game state from context
  const { status, incorrectLetters, maxMistakes, restartGame, targetWord } = useHangmanContext();
  
  // Don't render during loading
  if (status === "loading") return null;
  
  // Determine game outcome
  const lost = status === "lost";
  const won = status === "won";
  
  return (
    <div className="game-status">
      <div className="status-mistakes">
        Mistakes: {incorrectLetters.length} / {maxMistakes}
      </div>
      {won && <span className="text-success">You won! 🎉</span>}
      {lost && <span className="text-danger">You lost. The word was "{targetWord.toUpperCase()}".</span>}
      <button onClick={restartGame} className="btn-restart">Restart</button>
    </div>
  );
}


