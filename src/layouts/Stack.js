import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const VerticalStack = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > * + * {
    margin-top: 1rem;
  }
`

export const HorizontalStack = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: row;

  & > * + * {
    margin-left: 1rem;
  }
`