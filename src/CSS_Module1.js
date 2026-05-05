import React from 'react'
// import './CSS_Module2.css'
import Style from './CSS_Module1.module.css'
import Style1 from './CSS_Module2.module.css'

export default function CSS_Module1() {
  return (
    <div>
      <h1 className={Style.head}>CSS Module 1</h1>
      <h1 className={Style1.head}>Another Sentence</h1>
    </div>
  )
}
