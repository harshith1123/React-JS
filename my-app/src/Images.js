import React from 'react'
import Shiva from './images/shiva.jpg'

function Images() {
  return (
    <div>
      <img src={Shiva} alt="Not have" height="150px" width="200px" />
      <img src={require('./images/FunWithTech.jpg')} height="150px" width="200px"/>
      <img src='images/SS.png' height="200px" width="200px"/>
    </div>
  )
}

export default Images
