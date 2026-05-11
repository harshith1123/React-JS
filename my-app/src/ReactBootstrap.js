import React, { useState } from 'react'
import { Alert, AlertHeading, AlertLink, Button } from 'react-bootstrap'

function ReactBootstrap() {
  const [show, setShow] = useState(true);
  // return (
  //   <div>
  //   {/* Primary */}
  //     <Button>Submit</Button>
  //     <Button variant='danger'>Submit</Button>
  //     <Button variant='dark'>Submit</Button>
  //     <Button variant='secondary'>Submit</Button>
  //     <Button variant='success'>Submit</Button>
  //     <Button variant='warning'>Submit</Button>

  //     {/* Size */}
  //     <div>
  //       <Button variant='danger' size='lg'>Submit</Button>
  //       <Button variant='danger' >Submit</Button>
  //       <Button variant='danger' size='sm'>Submit</Button>
  //     </div>

  //     {/* Active/Disabled */}
  //     <div>
  //       <Button variant='danger' active>Submit</Button>
  //       <Button variant='danger' disabled>Submit</Button>
  //     </div>

  //     {/* Button Link */}
  //     <div>
  //       <Button variant='danger' href='https://www.instagram.com'>Open For Instagram</Button>
  //     </div>

  //     {/* Alert */}
  //     <Alert variant='success'>
  //       <AlertHeading>
  //         This is the Alert Heading
  //       </AlertHeading>
  //       <p>This is the Alert Description</p>
  //       <AlertLink href='https://www.facebook.com'>Open Facebook</AlertLink>
  //     </Alert>
  //   </div>
  // )
  if(show){
    return(
      <div>
        <Alert variant='success' onClose={()=>{setShow(false)}} dismissible>
           <AlertHeading>
             This is the Alert Heading
           </AlertHeading>
           <p>This is the Alert Description</p>
           <AlertLink href='https://www.facebook.com'>Open Facebook</AlertLink>
         </Alert>
      </div>
    )
  }
}

export default ReactBootstrap
