import Axios  from 'axios';
import React, { useState } from 'react'

function PostRequestViaAxios() {
    const [title,setTitle]= useState('');
    const [body,setBody]= useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("dkjdf")
        Axios.post('https://jsonplaceholder.typicode.com/posts',{
            title,
            body
        }).then((success)=>{
            console.log(success);
        }).catch((error)=>{
            console.log(error);
        })
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">Enter Title</label>
        <input type="text" name="" value={title} onChange={(e)=> setTitle(e.target.value)} />
        <br />
        <br />
        <label htmlFor="">Enter Body</label>
        <textarea name="" col="30" row="10" value={body} onChange={(e)=> setBody(e.target.value)}></textarea>
        <br /><br />
        <input type="submit" value="POST" />
      </form>
    </div>
  )
}

export default PostRequestViaAxios
