import '../styles/TodoSearch.css';
export default function TodoSearch({searchValue, setSearchValue, loading}) {
  const onSearchValueChange = (event) =>{
    setSearchValue(event.target.value);
  };
  return (
      <input 
      className='TodoSearch' 
      placeholder='Buscar TODO' 
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
      />
  );
}
