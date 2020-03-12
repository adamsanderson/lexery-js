import React from 'react'
import { css } from 'emotion'
import { motion } from "framer-motion"

import { VerticalStack } from '../layouts/Stack'
import { HowToPlay, HowToAcceptHint, ValidWordRule, UseOnceRule, DifferenceRule } from '../components/Fragment'
import { HoverButton } from '../components/Button'
import { staggerChildren, fadeInUp } from '../animations'

const ulStyle = css(`
  margin: 0;
  padding: 0;
  padding-left: 1.2rem;
  line-height: 1.4;
`)

export default function Intro({ onStart }) {
  return (
    <VerticalStack initial='initial' animate='animate' variants={staggerChildren} exit='initial' >
      <ul className={ulStyle}>
        <motion.li variants={fadeInUp} >{HowToPlay}</motion.li>
        <motion.li variants={fadeInUp} >{HowToAcceptHint}</motion.li>
        <motion.li variants={fadeInUp} >{ValidWordRule}</motion.li>
        <motion.li variants={fadeInUp} >{UseOnceRule}</motion.li>
        <motion.li variants={fadeInUp} >{DifferenceRule}</motion.li>
      </ul>
      <HoverButton variants={fadeInUp} onClick={onStart}>Start</HoverButton>
    </VerticalStack>
  )
}