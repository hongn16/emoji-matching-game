// Import createSlice.
import { createSlice } from '@reduxjs/toolkit';

// Declare initial state.
const initialState = [
    {id: 0, contents: '😀', visible: true, matched: true}, 
    {id: 1, contents: '😀', visible: true, matched: true}, 
    {id: 2, contents: '😂', visible: true, matched: true}, 
    {id: 3, contents: '😂', visible: true, matched: true}, 
    {id: 4, contents: '😭', visible: true, matched: true}, 
    {id: 5, contents: '😭', visible: true, matched: true}, 
    {id: 6, contents: '😡', visible: true, matched: true}, 
    {id: 7, contents: '😡', visible: true, matched: true}, 
    {id: 8, contents: '😱', visible: true, matched: true}, 
    {id: 9, contents: '😱', visible: true, matched: true}, 
    {id: 10, contents: '🤯', visible: true, matched: true}, 
    {id: 11, contents: '🤯', visible: true, matched: true}, 
];

// Slice
export const boardSlice = createSlice({
    name: 'board',
    initialState: initialState,
    reducers: {
        setBoard: () => {
            let setState = [];
            const words = randomWords();

            words.forEach((element, index) => 
                setState.push({
                    id: index,
                    contents: element,
                    visible: false,
                    matched: false,
                })
            );
            
            return setState;
        },
        flipCard: (state, action) => {
            let flipState = [...state];

            // Declare card ID.
            const cardID = action.payload;
            
            // Update card to flip.
            flipState[cardID] = {...state[cardID], visible: true};

            // Declare card ID to index.
            const [index1, index2] = flipState.filter(card => card.visible).map(card => card.id);

            // If index2 is not undefined...
            if (index2 !== undefined) {
                // Declare cards.
                const card1 = flipState[index1];
                const card2 = flipState[index2];

                // If the card contents match... 
                if (card1.contents === card2.contents) {
                    // Update cards to match
                    flipState[index1] = {...card1, visible: false, matched: true};
                    flipState[index2] = {...card2, visible: false, matched: true};
                }
            }

            // Returns flipped cards.
            return flipState;
        },
        resetCards: (state) => {
            // Returns cards back to unflipped.
            return state.map(card => ({...card, visible: false}));
        },
    }
});


// Declare word pairs.
const wordPairs = [
    '😀', '😀', 
    '😂', '😂', 
    '😭', '😭', 
    '😡', '😡',
    '😱', '😱',
    '🤯', '🤯',
];

// Function to create random words.
const randomWords = () => {
    // Declare empty array.
    let words = [];

    // Declare pair array.
    let newWordPairs = [...wordPairs];

    // Declare length of array.
    const reps = newWordPairs.length;

    // Loop over pairs.
    for (let i = 0; i < reps; i++) {
        // Declare word index.
        const wordIndex = Math.floor(Math.random()*newWordPairs.length);
        // Add pair into array.
        words.push(newWordPairs[wordIndex]);
        // Remove pair from array.
        newWordPairs.splice(wordIndex, 1);
    }

    // Returns random words.
    return words;
};

// Selectors
export const selectBoard = state => state.board.map(card => ({
    id: card.id,
    contents: card.contents
}));

export const selectVisibleIDs = state => state.board.filter(card => card.visible).map(card => card.id);

export const selectMatchedIDs = state => state.board.filter(card => card.matched).map(card => card.id);

// Exports
export const { setBoard, flipCard, resetCards } = boardSlice.actions;
export default boardSlice.reducer; 