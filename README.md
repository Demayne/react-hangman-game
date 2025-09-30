# Hangman Game

A React-based Hangman word guessing game built with Create React App. Players guess letters to reveal a hidden word while avoiding too many incorrect guesses that result in the hangman being drawn.

## Game Rules

1. **Objective**: Guess the hidden word by selecting letters from the on-screen keyboard
2. **Gameplay**: 
   - A random word is selected from the dictionary
   - Click letters on the keyboard to make guesses
   - Correct guesses reveal the letter in the word
   - Incorrect guesses add to your mistake count and draw the hangman
3. **Winning**: Reveal all letters in the word before making too many mistakes
4. **Losing**: Make 10 incorrect guesses and the hangman is complete
5. **Restart**: Click the "Restart" button to play again with a new word

## Features

- **Interactive Components**: On-screen keyboard, word display, hangman drawing
- **Visual Feedback**: Letters change appearance when guessed, hangman drawing progresses
- **Game State Management**: Win/loss detection, mistake tracking, restart functionality
- **Help System**: Built-in help modal with game instructions
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with Bootstrap styling

## Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation Steps

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd hangman
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The game will automatically load and start

### Production Build

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build` folder that can be deployed to any static hosting service.


## Technical Details

- **Framework**: React 18 with Create React App
- **Styling**: Bootstrap 5 + custom CSS
- **State Management**: React Context API
- **Asset Handling**: Create React App's built-in asset system
- **Code Style**: 2-space indentation, comprehensive comments
- **Components**: Functional components with hooks

## Game Components

1. **HangmanDrawing**: Displays progressive hangman images based on mistakes
2. **WordDisplay**: Shows the target word with underscores for unguessed letters
3. **Keyboard**: Interactive letter buttons with visual feedback
4. **GameStatus**: Displays mistake count, win/loss messages, and restart button
5. **HelpModal**: Modal dialog with game instructions

## Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

### Code Standards

- 2-space indentation throughout
- Comprehensive JSDoc comments for all functions
- Meaningful variable and component names
- Consistent file organization following React best practices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for educational purposes as part of a React capstone assignment.

## Author

Demayne Govender
