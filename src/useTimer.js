import { useEffect, useState, useRef } from 'react'

const INTERVAL = 100

export default function useTimer(duration) {
  if (!duration) throw new Error('Duration required')

  const started = useRef()
  started.current = started.current || Date.now()

  const [remaining, setRemaining] = useState(duration)
  const isDone = remaining <= 0

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newRemaining = Math.max(0, duration - (Date.now() - started.current))
      setRemaining(newRemaining)
      
      if (newRemaining <= 0) {
        clearInterval(intervalId)
      }
    }, INTERVAL)

    return () => clearInterval(intervalId)
  }, [duration])

  return {
    remaining,
    duration,
    isDone,
  }
}