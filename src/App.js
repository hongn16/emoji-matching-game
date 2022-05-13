import React from 'react';
import { useDispatch } from 'react-redux';

// Import Score and Board.
import { Score } from './features/score/Score.js';
import { Board } from './features/board/Board.js';

// Import setBoard and resetCards.
import { setBoard, resetCards } from './features/board/boardSlice';

const App = () => {
    // Declare dispatch.
    const dispatch = useDispatch();

    // Handles start of game.
    const startGameHandler = () => {
        // Dispatch an action to set the board.
        dispatch(setBoard());
    };

    const tryAgainHandler = () => {
        // Dispatch an action to reset the board.
        dispatch(resetCards());
    };

    return (
        <div className="App">
            <Score />
            <Board />
            <footer className="footer">
                <button className="start-button" onClick={startGameHandler}>
                    Start Game
                </button>
                <button className="try-new-pair-button" onClick={tryAgainHandler}>
                    Try New Pair
                </button>
            </footer>
        </div>
    );
};

export default App;