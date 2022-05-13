import React from 'react';
import { useSelector } from 'react-redux';

// Import CardRow.
import { CardRow } from './cardRow/CardRow.js';

// Import selectBoard.
import { selectBoard } from './boardSlice.js';

// Export Board component.
export const Board = () => {
    const currentBoard = useSelector(selectBoard);

    // Declare number of cards.
    const numberOfCards = currentBoard.length;

    // Declare board columns.
    const columns = 3;

    // Declare board rows.
    const rows = Math.floor(numberOfCards / columns);

    // Declare cards.
    const getRowCards = (row) => {
        // Declare empty array.
        const rowCards = [];

        // Loop over array.
        for (let j = 0; j < columns; j++) {
            // Declare card index.
            const cardIndex = row * columns + j;

            // Add cards into array.
            rowCards.push(currentBoard[cardIndex])
        }

        // Return array.
        return rowCards;
    };

    // Declare empty array.
    let content = [];

    // Loop card content
    for (let row = 0; row < rows; row++) {
        // Declare row of cards.
        const rowCards = getRowCards(row);

        // Update content into CardRow component.
        content.push(
            <CardRow 
                key={row}
                cards={rowCards}
            />
        );
    };
      
    // Returns card content.
    return (
        <div className="cards-container">
            {content}
        </div>
    );
};