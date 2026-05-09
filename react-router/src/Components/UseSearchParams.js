import React from 'react'
import { useSearchParams } from 'react-router-dom'

function UseSearchParams() {
    const [searchParams,setSearchParams] = useSearchParams();
    const handleSearch = (e)=>{
        e.preventDefault();
        const q = searchParams.get('q');
        const age = searchParams.get('age')
        alert(q+" "+age);
    }
  return (
    <div>
      <form action="" onSubmit={handleSearch}>
        <label htmlFor="">Search:</label>
        {/* Here q object defines query string */}
        <input type="search" name="" id="" placeholder='search' onChange={(e)=> setSearchParams({q:e.target.value})}/>
        <input type="submit" value="Search"  />
        <input type="reset" value="Reset" onClick={(e)=> setSearchParams({})}  />
      </form>
    </div>
  )
}

export default UseSearchParams
