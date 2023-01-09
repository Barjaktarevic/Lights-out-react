import GameBoard from './GameBoard'
import { BsLightbulb, BsGithub } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import { useState } from 'react';
import { darkModeStyles, lightModeStyles } from './CommonClasses';

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const handleClick = () => {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className={darkMode ? darkModeStyles + "w-screen h-screen flex justify-center align-middle overflow-x-hidden relative" :
    lightModeStyles + "w-screen h-screen flex justify-center align-middle overflow-x-hidden relative"}>
      {darkMode && <BsLightbulb className='absolute top-2 right-2 md:h-12 md:w-12 h-8 w-8 text-white hover:cursor-pointer' onClick={handleClick}/>}
      {!darkMode && <MdDarkMode className='absolute top-2 right-2 md:h-12 md:w-12 h-8 w-8 text-black hover:cursor-pointer' onClick={handleClick}/>}
      <a href="https://barjaktarevic.github.io/"><BsGithub className={darkMode ? darkModeStyles + "absolute top-2 left-2 md:h-12 md:w-12 h-8 w-8 text-white hover:cursor-pointer" : lightModeStyles + "absolute top-2 left-2 md:h-12 md:w-12 h-8 w-8 text-black hover:cursor-pointer"} /> </a>
      <GameBoard darkMode={darkMode}/>
    </div>
  )
}

export default App
