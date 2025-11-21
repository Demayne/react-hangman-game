# React Hangman Game 🎮

A modern, interactive Hangman word guessing game built with React 19 and Bootstrap 5. Players guess letters to reveal a hidden word while avoiding too many incorrect guesses that result in the hangman being drawn.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.1.1-blue.svg)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-purple.svg)

## 🎯 Game Rules

1. **Objective**: Guess the hidden word by selecting letters from the on-screen keyboard
2. **Gameplay**: 
   - A random word is selected from the dictionary
   - Click letters on the keyboard to make guesses
   - Correct guesses reveal the letter in the word
   - Incorrect guesses add to your mistake count and draw the hangman
3. **Winning**: Reveal all letters in the word before making too many mistakes
4. **Losing**: Make 10 incorrect guesses and the hangman is complete
5. **Restart**: Click the "Restart" button to play again with a new word

## ✨ Features

- **Interactive Components**: On-screen keyboard, word display, hangman drawing
- **Visual Feedback**: Letters change appearance when guessed, hangman drawing progresses
- **Game State Management**: Win/loss detection, mistake tracking, restart functionality
- **Help System**: Built-in help modal with game instructions
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with Bootstrap styling
- **React Context API**: Efficient state management across components
- **Custom Hooks**: Optimized performance with React hooks

## 🚀 Installation & Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm (version 9 or higher)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Demayne/React-Hangman-Game.git
   cd React-Hangman-Game
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

### Deployment

The app can be deployed to various platforms:

**GitHub Pages:**
```bash
npm install --save-dev gh-pages
```
Add to `package.json`:
```json
"homepage": "https://Demayne.github.io/React-Hangman-Game",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
Then run: `npm run deploy`

**Netlify/Vercel:** Simply connect your GitHub repo and deploy automatically.

## 🔧 Technical Details

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

## 🎨 Project Structure

```
hangman/
├── public/               # Static assets
├── src/
│   ├── assets/          # Images and dictionary
│   ├── components/      # Reusable components
│   ├── features/        # Feature-based modules
│   │   └── hangman/     # Hangman game feature
│   │       ├── components/  # Game components
│   │       ├── context/     # State management
│   │       └── css/         # Component styles
│   ├── hooks/           # Custom React hooks
│   ├── services/        # Business logic
│   └── App.js           # Main app component
└── package.json         # Dependencies
```

## 💻 Development

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

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Demayne**
- GitHub: [@Demayne](https://github.com/Demayne)
- Repository: [React-Hangman-Game](https://github.com/Demayne/React-Hangman-Game)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!
