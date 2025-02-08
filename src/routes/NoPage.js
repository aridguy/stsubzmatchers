import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoPage = () => {
    const Navigate = useNavigate("/")
  return (
    <div>
      page your looking for is not found
      <button onClick={Navigate("/")} className='btm btn-warning'>Go back home</button>
    </div>
  )
}

export default NoPage
