import React, { useRef, useEffect } from 'react'
import WordInput from '../components/WordInput'
import WordHint from '../components/WordHint'
import WordLog from '../components/WordLog'
import DonutTimer from '../components/DonutTimer'
import useGameState from '../useGameState'
import { VerticalStack, HorizontalStack } from '../layouts/Stack'
import { HoverButton } from '../components/Button'
import { staggerChildren, fadeInUp } from '../animations'

export default function Game({ onExit }) {
  const gameState = useGameState(window._WORDS, {})
  const inputRef = useRef()

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef])

  return (
    <VerticalStack initial='initial' animate='animate' variants={staggerChildren} exit='initial' >
      <HorizontalStack variants={fadeInUp} >
        <WordInput {...gameState.inputProps} wordState={gameState.wordState} ref={inputRef} />
        <DonutTimer timer={gameState.timer} size={'3.5rem'} strokeWidth={'1.25px'} />
      </HorizontalStack>

      <WordHint variants={fadeInUp} wordState={gameState.wordState} />
      <WordLog variants={fadeInUp} wordsSeen={gameState.wordsSeen} />

      <HorizontalStack variants={fadeInUp}>
        <HoverButton onClick={gameState.resetGame}>Restart</HoverButton>
        {gameState.timer.isDone && (
          <HoverButton onClick={onExit}>Main Menu</HoverButton>
        )}
      </HorizontalStack>
    </VerticalStack>
  );
}