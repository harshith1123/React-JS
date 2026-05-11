import React from 'react'
import { ErrorMessage } from 'formik'

function RedErrorMessage({propPass}) {
  return (
    <div style={{color:"red"}}>
      <ErrorMessage name={propPass}/>
    </div>
  )
}

export default RedErrorMessage
