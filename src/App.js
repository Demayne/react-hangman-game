/**
 * App.js
 * Main application component for Hangman game
 * Provides layout and integrates all game components
 */
import './App.css';
import { 
  HangmanProvider, 
  HangmanDrawing, 
  WordDisplay, 
  Keyboard, 
  GameStatus, 
  HelpModal 
} from './features/hangman';

/**
 * App component
 * Main application wrapper with responsive layout
 * Integrates all Hangman game components
 */
function App() {
  return (
    <HangmanProvider>
      <div className="app-root">
        <div className="app-container">
          <div className="app-header">
            <h1 className="app-title">Hangman</h1>
            <HelpModal />
          </div>
          <div className="app-grid">
            <div className="panel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <HangmanDrawing />
            </div>
            <div className="panel" style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
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

export default App;
