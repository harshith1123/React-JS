import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import Shirts from './Shirts'
// import Pants from './Pants'

function Products() {
  return (
    <>
        <div className='products'>
            <h1>This is the Products Component</h1>
            <Link to={"shirts"}>Shirts</Link>
            <Link to={"pants"}>Pants</Link>
        </div>
        <Outlet/>    
    </>
    
  )
}

export default Products
