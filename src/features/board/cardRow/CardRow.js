import React from "react";

// Import Card component.
import { Card } from './card/Card.js';

// Export CardRow component.
export const CardRow = ({ cards }) => {
    // Map over Card component.
    const content = cards.map(card =>
        <Card 
            key={card.id}
            id={card.id}
            contents={card.contents}
        />
    )
    
    // Returns card content.
    return (
        <>
            {content}
        </>
    )
}