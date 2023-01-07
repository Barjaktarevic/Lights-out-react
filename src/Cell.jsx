import React from 'react'
import { flippedClasses, notFlippedClasses } from './CommonClasses'

export default function Cell({index, flipSelfAndSurroundingCells, cell}) {

  const handleClick = () => {
    flipSelfAndSurroundingCells(index, cell)
  }

  return (
    <div 
    className={cell === true ? flippedClasses : notFlippedClasses }
    key={index}
    onClick={handleClick}
    >

    </div>
  )
}
