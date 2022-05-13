import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Import selectVisibleIDs, flipCard, selectMatchedIDs, resetCards.
import { selectVisibleIDs, flipCard, selectMatchedIDs, resetCards } from '../../boardSlice.js';

// Export Card component.
export const Card = ({ id, contents }) => {
    // Declare visibleIDs, matchedIDs and dispatch.
    const visibleIDs = useSelector(selectVisibleIDs);
    const matchedIDs = useSelector(selectMatchedIDs);
    const dispatch = useDispatch();

    // Handles the card flip event.
    const flipHandler = (id) => {
        // Dispatch an action to flip card.
        dispatch(flipCard(id));
    };

    // Handles try again event.
    const tryAgainHandler = () => {
        // Dispatch an action to reset cards.
        dispatch(resetCards());
    };

    // Declare cardStyle.
    let cardStyle = 'resting';

    // Function to flip card once clicked.
    let click = () => flipHandler(id);

    // Declare card image logo.
    let cardText = (
        <img src="" alt=""/>
    );

    // If cards are shown...
    if (visibleIDs.includes(id) || matchedIDs.includes(id)) {
        // Show contents.
        cardText = contents;
        // Update to stop click event.
        click = () => {};
    };

    // If two cards are matched...
    if (matchedIDs.includes(id)) {
        // Update cardStyle to 'matched'.
        cardStyle = 'matched';
    };

    // If two cards are shown...
    if (visibleIDs.length === 2) {
        // Update click to handle try again event.
        click = tryAgainHandler;
    };

    // If more cards are shown and does not include other matches...
    if (visibleIDs.length >= 2 && !matchedIDs.includes(id)) {
        // Update cardStyle to 'no-match'.
        cardStyle = 'no-match';
    };

    // Returns card as button.
    return (
        <button className={`card ${cardStyle}`} onClick={click}>
            {cardText}
        </button>
    );
};