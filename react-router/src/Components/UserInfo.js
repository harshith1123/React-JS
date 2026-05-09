import React from 'react'
import { useParams } from 'react-router-dom'

function UserInfo() {
    // UseParams hook gives the current url
    // const userId = useParams();
    // console.log(userId);
    // const id = userId.id;
    const {id} = useParams();
  return (
    <div>
      <h1>Here, You find selected user info which is User:{id}</h1>
    </div>
  )
}

export default UserInfo
