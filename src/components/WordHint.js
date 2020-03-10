import React from 'react';
import { css } from 'emotion'
import { PENDING, VALID, SEEN, UNKNOWN, DIFFERENCE } from '../useGameState'
import { HowToPlay, HowToAcceptHint, UseOnceRule, ValidWordHint, DifferenceRule } from './Fragment';

const CONTENT_FOR_STATE = {
  [PENDING]: HowToPlay,
  [VALID]: HowToAcceptHint,
  [SEEN]: UseOnceRule,
  [UNKNOWN]: ValidWordHint,
  [DIFFERENCE]: DifferenceRule,
}

const style = css(`
  font-size: 1rem;
  color: #424242;
`)

const WordHint = ({wordState}) => {
  return (
    <div className={style}>
      {CONTENT_FOR_STATE[wordState] || <>&nbsp;</> }
    </div>
  )
}

export default WordHint