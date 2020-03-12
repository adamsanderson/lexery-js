import { useEffect, useState, useRef } from 'react'
import distance from './levenshteinDistance'
import useTimer from './useTimer'


export const PENDING = "PENDING"
export const VALID = "VALID"
export const UNKNOWN = "UNKNOWN"
export const DIFFERENCE = "DIFFERENCE"
export const SEEN = "SEEN"

export default function useGameState(dictionary, initialWord) {
  const initialWordRef = useRef(initialWord)

  if (!initialWordRef.current) {
    const candidates = Object.keys(dictionary).filter(w => w.length === 5)
    initialWordRef.current = candidates[parseInt(Math.random() * candidates.length)]
  }
  const [word, setWord] = useState(initialWordRef.current)
  const [wordsSeen, setWordsSeen] = useState([initialWordRef.current])
  const [wordState, setWordState] = useState(PENDING)
  const timer = useTimer(60 * 1000)
  
  useEffect(() => {
    const lastWord = wordsSeen[wordsSeen.length - 1]

    if (word === lastWord) {
      setWordState(PENDING)
    } else if (!dictionary[word]) {
      setWordState(UNKNOWN)
    } else if (wordsSeen.indexOf(word) >= 0) {
      setWordState(SEEN)
    } else if (distance(lastWord, word) !== 1) {
      setWordState(DIFFERENCE)
    } else {
      setWordState(VALID);
    }
  }, [word, wordsSeen, dictionary])

  function onChange(event) {
    const newWord = event.target.value.toLowerCase()
    setWord(newWord)
  }

  function onKeyUp(event) {
    if (event.key === 'Enter') {
      onSubmit()
    } else if (event.key === 'Escape') {
      onReset()
    }
  }

  function onSubmit() {
    if (wordState === VALID) {
      setWordsSeen([...wordsSeen, word])
    }
  }

  function onReset() {
    setWord(wordsSeen[wordsSeen.length - 1])
  }

  return ({
    inputProps: {
      value: word,
      disabled: timer.isDone,
      onChange,
      onKeyUp,
    },
    word,
    wordState,
    wordsSeen,
    timer,
  })
}