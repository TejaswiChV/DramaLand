import React from 'react'
import { useParams } from 'react-router-dom'

const Dramas = () => {
  const { id } = useParams()
  return (
    <div>Dramas {id}</div>
  )
}

export default Dramas