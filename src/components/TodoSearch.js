import React, { useContext } from 'react';
import '../styles/TodoSearch.css';
import { TodoContext } from '../TodoContext/TodoContext';
export default function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext)
  
  const onSearchValueChange = (event) =>{
    setSearchValue(event.target.value);
  };
  return (
    <>
      <input 
      className='TodoSearch' 
      placeholder='Buscar TODO' 
      value={searchValue}
      onChange={onSearchValueChange}
      />
    </>
  );
}
