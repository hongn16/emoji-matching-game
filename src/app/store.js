// Import configureStore.
import { configureStore } from '@reduxjs/toolkit'

// Import boardReducer.
import boardReducer from '../features/board/boardSlice.js';

// Export store.
export const store = configureStore({
    reducer: {
        board: boardReducer
    }
});

