import React, { useState, useEffect } from 'react'
import Cell from './Cell'
import { darkModeStyles, lightModeStyles } from './CommonClasses'

const NUMBER_OF_CELLS = Array(25)

export default function GameBoard({darkMode}) {
  const [cells, setCells] = useState([...NUMBER_OF_CELLS]) 
  const [flipping, setFlipping] = useState(true) 
  const [won, setWon] = useState(false)

  function randomizeLitCellsAtStart(cellsArray) {
    const randomIndices = generateFiveRandomNumbers()
    for (let i = 0; i < 5; i++) {
        cellsArray[randomIndices[i]] = true
    }
    for (let i = 0; i < cells.length; i++) {
        if (cellsArray[i] === undefined)
        cellsArray[i] = false
    }
  }

  function generateFiveRandomNumbers() {
    let randomNumbers = []
    for(let i = 0; i < 2; i++) {
        let number = Math.floor(Math.random() * 24 + 1)
        randomNumbers.push(number)
    }
    return randomNumbers
  }

  function flipSelfAndSurroundingCells(index, cell) {
    cells[index] = !cell
    cells[index-5] = !cells[index-5]

    if (!(index >= cells.length-5)) cells[index+5] = !cells[index+5]

    if(!(index / 4 === 1) && !(index / 9 === 1) && !(index / 14 === 1) && !(index / 19 === 1) && !(index / 24 === 1)) cells[index+1] = !cells[index+1]

    if(!(index / 5 === 1) && !(index / 10 === 1) && !(index / 15 === 1) && !(index / 20 === 1)) cells[index-1] = !cells[index-1]
  
    setFlipping(true)
  }

  function determineIfWon() {
    const flippedCells = cells.filter(cell => cell !== false)
    if (flippedCells.length === 0) setWon(true)
  }

  useEffect(() => {
    randomizeLitCellsAtStart(cells)
    setFlipping(false)
  }, [])

  useEffect(() => {
    determineIfWon()
    setFlipping(false)
  }, [flipping])


  return (
    <div>
    <h1 className={darkMode ? 'text-center text-6xl font-bold mt-5 pb-4 text-white font-mono bg-gradient-to-r from-transparent via-indigo-400 to-transparent pt-4 italic' : "text-center text-6xl font-bold mt-5 pb-4 text-slate-800 font-mono bg-gradient-to-r from-transparent via-indigo-400 to-transparent pt-4 italic" }>Lights Out</h1>
    {!won && <div className='w-[50vh] h-[50vh] md:w-[80vh] md:h-[80vh] m-auto grid grid-cols-5 grid-rows-5 text-center border-4 border-slate-800 rounded-md'>
        {!flipping && cells.map((cell, index) => (
            <Cell cell={cell === true ? true : false} index={index} key={index} flipSelfAndSurroundingCells={flipSelfAndSurroundingCells} setFlipping={setFlipping} darkMode={darkMode}/>
        ))}
    </div>}
     {won && <h1 className='text-8xl animate-bounce mt-12 text-center text-pink-400 font-bold underline'>YOU WON</h1>}
    </div>
  )
}
