import { useState } from 'react'
 


const Search = ( {onSearch} ) => {

  const [search, setSearch] = useState('');
//  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault()

    if (!search) {
      alert('Please put in the search term!');
      return;
    }

    onSearch( {search} );

  } 

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <input type='text' placeholder='Search for...' 
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
      </div>

      <input type='submit' value='Search' className='btn btn-block' />
    </form>
  )
}

export default Search
