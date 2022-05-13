import React from 'react';
import { useSelector } from 'react-redux';

// Import selectMatchedIDs.
import { selectMatchedIDs } from '../board/boardSlice.js';

// Export Score component.
export const Score = () => {
    const cardsMatched = useSelector(selectMatchedIDs);

    // Returns score.
    return (
        <div className="score-container">
            Matched: {cardsMatched.length}
        </div>
    );
};