import React from 'react'

const TodoButton = ({text, onClick}) => {
  return (
    <button onClick={onClick} className='w-full py-[6px] bg-green1 rounded-[7px] text-white hover:bg-green2 transition duration-100'>{text}</button>
  )
}

export default TodoButton