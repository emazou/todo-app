import React from 'react'
import '../styles/TodoLoading.css'
export default function TodoLoading({loading}) {
  return (
    <h3 className={`TodoLoading ${loading && "TodoLoading--loading"}`}>Cargando TODOs...</h3>
  )
}
