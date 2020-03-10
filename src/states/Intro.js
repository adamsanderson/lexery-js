import React from 'react'
import { css } from 'emotion'

import { VerticalStack } from '../layouts/Stack'
import { HowToPlay, HowToAcceptHint, ValidWordRule, UseOnceRule, DifferenceRule } from '../components/Fragment'
import Button from '../components/Button'

const ulStyle = css(`
  margin: 0;
  padding: 0;
  padding-left: 1.2rem;
`)

export default function Intro({ onStart }) {
  return (
    <VerticalStack>
      <ul className={ulStyle}>
        <li>{HowToPlay}</li>
        <li>{HowToAcceptHint}</li>
        <li>{ValidWordRule}</li>
        <li>{UseOnceRule}</li>
        <li>{DifferenceRule}</li>
      </ul>
      <Button onClick={onStart}>Start</Button>
    </VerticalStack>
  )
}