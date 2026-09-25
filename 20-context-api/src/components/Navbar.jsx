import React from 'react'
import Nav2 from './Nav2'


const Navbar = (props) => {
    

  return (
    <div className='nav'>
        <h2>{data}</h2>
        <Nav2 theme={props.theme} />

    </div>
  )
}

export default Navbar