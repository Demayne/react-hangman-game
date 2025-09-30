/**
 * hangman/index.js
 * Public API for the Hangman feature
 * Exports only the components and functions that should be accessible outside this feature
 * This follows the advanced folder structure pattern for feature encapsulation
 */

// Export context provider and hook
export { HangmanProvider, useHangmanContext } from './context/HangmanContext';

// Export all game components
export { default as HangmanDrawing } from './components/HangmanDrawing';
export { default as WordDisplay } from './components/WordDisplay';
export { default as Keyboard } from './components/Keyboard';
export { default as GameStatus } from './components/GameStatus';
export { default as HelpModal } from './components/HelpModal';

