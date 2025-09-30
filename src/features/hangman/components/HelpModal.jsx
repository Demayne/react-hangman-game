/**
 * HelpModal.jsx
 * Modal component that displays game rules and instructions
 * Provides accessible help functionality for users
 */
import React, { useState } from "react";
import "../css/HelpModal.css";

/**
 * HelpModal component
 * Toggleable modal with game instructions
 * Uses local state to control modal visibility
 */
export default function HelpModal() {
  // State to control modal visibility
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <button onClick={() => setOpen(true)} className="help-btn">Help</button>
      
      {/* Modal overlay and content */}
      {open && (
        <div role="dialog" aria-modal="true" className="modal-overlay">
          <div className="modal-card">
            <h2 style={{ marginTop: 0 }}>How To Play</h2>
            <ol>
              <li>A random word is chosen. Guess letters using the on-screen keyboard.</li>
              <li>Correct guesses reveal letters. Incorrect guesses draw the hangman.</li>
              <li>You have a limited number of mistakes. If you exceed them, you lose.</li>
              <li>Win by revealing all letters before the hangman is complete.</li>
            </ol>
            <div className="modal-actions">
              <button onClick={() => setOpen(false)} className="close-btn">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


