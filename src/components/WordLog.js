import React from 'react';
import { motion } from 'framer-motion';

const WordInput = ({wordsSeen, ...rest}) => {
  return (
    <motion.div {...rest}>
      ○ {wordsSeen.join(" → ")}
    </motion.div>
  )
}

export default WordInput