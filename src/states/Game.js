import React, { useRef, useEffect } from 'react'
import { css } from 'emotion'
import WordInput from '../components/WordInput'
import WordHint from '../components/WordHint'
import WordLog from '../components/WordLog'
import DonutTimer from '../components/DonutTimer'
import useGameState from '../useGameState'
import { VerticalStack, HorizontalStack } from '../layouts/Stack'
import Button from '../components/Button'

export default function Game({ onExit }) {
  const gameState = useGameState(window._WORDS)
  const inputRef = useRef()

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef])

  return (
    <VerticalStack className={css(`width: 40rem;`)}>
      <HorizontalStack>
        <WordInput {...gameState.inputProps} wordState={gameState.wordState} ref={inputRef} />
        <DonutTimer timer={gameState.timer} size={'3.5rem'} strokeWidth={'1.25px'} />
      </HorizontalStack>

      <WordHint wordState={gameState.wordState} />
      <WordLog wordsSeen={gameState.wordsSeen} />

      {gameState.timer.isDone && (
        <Button onClick={onExit}>Main Menu</Button>
      )}
    </VerticalStack>
  );
}