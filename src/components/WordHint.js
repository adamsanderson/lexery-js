import React from 'react';
import { css } from 'emotion'
import { PENDING, VALID, SEEN, UNKNOWN, DIFFERENCE } from '../useGameState'
import { HowToPlay, HowToAcceptHint, UseOnceRule, ValidWordHint, DifferenceRule } from './Fragment';
import { motion } from 'framer-motion';

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

const WordHint = ({wordState, ...rest}) => {
  return (
    <motion.div className={style} {...rest}>
      {CONTENT_FOR_STATE[wordState] || <>&nbsp;</> }
    </motion.div>
  )
}

export default WordHint