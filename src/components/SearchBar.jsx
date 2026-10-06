import React from 'react'
import { useState } from 'react'

function SearchBar({onSearch}) {
  const [searchText,setSearchText]=useState("")
  return (
    <div className='input-group mx-auto' style={{width:"600px" ,marginTop:"80px",marginBottom:"50px"}}>
      <input type="text" placeholder='Search for a movie...' className='form-control'
      value={searchText}
      onChange={(e)=>setSearchText(e.target.value)}/>
      <button className='btn btn-success' onClick={()=>onSearch(searchText)}>Search</button>
    </div>
  )
}

export default SearchBar