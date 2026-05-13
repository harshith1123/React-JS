import React, { useEffect, useState } from 'react'

function FetchAPI() {
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        fetch("http://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response);
            response.json().then((result)=>{
                console.log(result);
                setPosts(result);
            });
        }).catch((reject)=>{
            console.log("Failed to fetch API");
        })
    })
  return (
    <div>
      <table style={{ border: "2px solid black", borderCollapse: "collapse" }}>
        <thead>
            <tr>
                <th style={{ border: "1px solid black" }}>UserId</th>
                <th style={{ border: "1px solid black" }}>Id</th>
                <th style={{ border: "1px solid black" }}>Title</th>
                <th style={{ border: "1px solid black" }}>Body</th>
            </tr>
        </thead>
        <tbody>
            {posts.map((e) => (
            <tr key={e.id}>
                <td style={{ border: "1px solid black" }}>{e.userId}</td>
                <td style={{ border: "1px solid black" }}>{e.id}</td>
                <td style={{ border: "1px solid black" }}>{e.title}</td>
                <td style={{ border: "1px solid black" }}>{e.body}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  )
}

export default FetchAPI
