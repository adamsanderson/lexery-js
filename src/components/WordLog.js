import React from 'react';

const WordInput = ({wordsSeen}) => {
  return (
    <div>
      {wordsSeen.join(" → ")}
    </div>
  )
}

export default WordInput