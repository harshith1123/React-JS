import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function GetRequestViaAxios() {
    const baseURL = 'https://jsonplaceholder.typicode.com/posts'

    const [myData,setMyData] = useState([])

    useEffect(()=>{
        console.log("Inside the UseEffect")
        Axios.get(baseURL).then((response)=>{
            console.log(response);
            setMyData(response.data)
        }).catch((rej)=>{
            console.log("Error Caused",rej);
        });
    })
  return (
    console.log("Inside the return"),
    <div>
      {myData.map((res)=>{
        const {id,userId,title,body} = res;
        return(
            <div key={id}>
                <h1>{id}</h1>
                <h1>{userId}</h1>
                <h1>{title}</h1>
                <h1>{body}</h1>
            </div>                        
        )
      })}
    </div>
  )
}

export default GetRequestViaAxios
