import React, { useState } from 'react'
import { css, cx } from 'emotion'
import { VerticalStack } from './layouts/Stack'
import Intro from './states/Intro'
import Game from './states/Game'

const INTRO = "INTRO";
const GAME = "GAME";

const centered = css(`
  display: flex;
  justify-content: center;
`)

const fullScreen = css(`
  min-height: 100vh;
  width: 100%;
  margin-top: 10vh;
`)

const header = css(`
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
`)

function App() {
  const [stage, setStage] = useState(INTRO)
  
  const startGame = () => {
    setStage(GAME)
  }

  const startIntro = () => {
    setStage(INTRO)
  }

  let stageContent
  if (stage === INTRO) {
    stageContent = <Intro onStart={startGame}/>
  } else if (stage === GAME) {
    stageContent = <Game onExit={startIntro}/>
  } else {
    throw new Error("Unknown Stage " + stage)
  }

  return (
    <div className={cx(fullScreen, centered)}>
      <VerticalStack className={css(`width: 40rem;`)}>
        <h1 className={header}>Lexery</h1>
        { stageContent }
      </VerticalStack>
    </div>
  );
}

export default App;
