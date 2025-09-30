/**
 * GamePage.jsx
 * Main game page component
 * Contains the complete Hangman game interface
 */

import React from 'react';
import { 
  HangmanProvider, 
  HangmanDrawing, 
  WordDisplay, 
  Keyboard, 
  GameStatus, 
  HelpModal 
} from '../features/hangman';

/**
 * GamePage component
 * Main page for the Hangman game
 * Wraps all game components in the HangmanProvider
 */
export default function GamePage() {
  return (
    <HangmanProvider>
      <div className="game-page">
        <div className="game-container">
          {/* Header with title and help button */}
          <div className="game-header">
            <h1>Hangman</h1>
            <HelpModal />
          </div>
          
          {/* Main game area with two-column layout */}
          <div className="game-content">
            {/* Left column: Hangman drawing */}
            <div className="drawing-area">
              <HangmanDrawing />
            </div>
            
            {/* Right column: Game controls */}
            <div className="controls-area">
              <WordDisplay />
              <Keyboard />
              <GameStatus />
            </div>
          </div>
        </div>
      </div>
    </HangmanProvider>
  );
}

