import React from 'react'
import List2 from './List2';

export default function List1() {
    const students = ["Harshit","Shreyata","Pavan","Vishal"];
    const result = students.map((std,index) =><li key={index}>{std}</li>)
    const list = [
        {
            id:1,
            name: "Harshit",
            age: 22
        },
        {
            id:2,
            name: "Shreyata",
            age: 18
        },
        {
            id:3,
            name: "Pavan",
            age: 23
        },
        {
            id:4,
            name: "Vishal",
            age: 22
        }
    ];
    // const res = list.map((arr)=><p>Hey!... Name:<span>{arr.name}</span> and age is: <span>{arr.age}</span></p>);
    const res = list.map((arr)=><li key={arr.id}>Hey!... Name:{arr.name} and age is: {arr.age}</li>);
  return (
    <div>
        <h1>Directly Showing</h1>
        <ul>
            {students.map((std,index) => <li key={index}>{std}</li>)}
        </ul>
        
        <h1>Showing after storing in array</h1>
        <ul>
            {result}
        </ul>
        

        <h1>Showing Objects</h1>
        <ul>
            {res}
        </ul>
        

        <h1>Passing as Props</h1>
        <ul>
            {list.map(arr => <List2 list={arr}/>)}
        </ul>
        
    </div>
  )
}
