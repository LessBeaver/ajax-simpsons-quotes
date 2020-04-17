import React from 'react';
import './QuoteCard.css';

function QuoteCard({ quotes }) {
  return (
    <div className="QuoteCard">
      <img
        src={quotes.image}
        alt={quotes.character}
      />
      <ul>
        <li>
          Character: {quotes.character}
        </li>
        <li>
          Quote: {quotes.quote}
        </li>
      </ul>
    </div>
  );
};

export default QuoteCard;
