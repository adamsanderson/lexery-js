import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { hoverShadow } from '../animations'

const Button = styled(motion.button)`
  font-size: 0.9rem;
  border-radius: 1.5rem;
  padding: 0.25rem 2rem;
  padding-bottom: 0.4rem;
  border: 2px solid currentColor;
  background: rgba(255,255,255,0.6);
  font-weight: 700;
  text-transform: uppercase;
`
export const HoverButton = ({variants = {}, children, ...props}) => (
  <Button whileHover="hover" whileTap="hover" variants={{ ...hoverShadow, ...variants }} {...props}>
    { children }
  </Button>
)

export default Button