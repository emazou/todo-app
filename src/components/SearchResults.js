import React from 'react'
import '../styles/SearchResults.css'
export default function SearchResults(props) {
  return (
    <h3 className='SearchResults'>No hay resultados para {props.text}</h3>
  )
}
