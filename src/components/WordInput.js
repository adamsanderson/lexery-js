import React from 'react';
import { css, cx } from 'emotion'
import { PENDING, VALID } from '../useGameState'

const inputStyle = css(`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 2px solid currentColor;
  font-size: 2rem;
  width: 32rem;
  outline: none;
  transition: color 250ms ease-in-out;

  [disabled] {
    color: inherit;
    opacity: 0.125;
  }
`)

const invalidStyle = css(`
  color: #ff5722;
`)

const validStyle = css(`
  color: #009688;
`)

const pendingStyle = css(`
  color: #424242;
`)

const wordStateColor = (wordState) => {
  if (wordState === VALID) return validStyle;
  if (wordState === PENDING) return pendingStyle;

  return invalidStyle
}

const WordInput = ({wordState, ...inputProps}, ref) => {
  return (
    <input 
      ref={ref}
      spellCheck={false} 
      {...inputProps} 
      className={cx(inputStyle, wordStateColor(wordState))} 
    />
  )
}

export default React.forwardRef(WordInput)