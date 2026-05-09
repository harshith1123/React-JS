import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import Shirts from './Shirts'
// import Pants from './Pants'

function Products() {
  return (
    <>
        <div className='products'>
            <h1>This is the Products Component</h1>
            {/* Below two are the Relative Path */}
            {/* <Link to={"shirts"}>Shirts</Link>
            <Link to={"pants"}>Pants</Link> */}

            {/* Below two are the absolute path */}
            <Link to={"/products/shirts"}>Shirts</Link>
            <Link to={"/products/pants"}>Pants</Link>
        </div>
        {/* Allows to display one of the child components when any one of the link by clicking */}
        <Outlet/>    
    </>
    
  )
}

export default Products
