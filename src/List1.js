import React from 'react'
import List2 from './List2';

export default function List1() {
    const students = ["Harshit","Shreyata","Pavan","Vishal"];
    const result = students.map(std => <li>{std}</li>)
    const list = [
        {
            name: "Harshit",
            age: 22
        },
        {
            name: "Shreyata",
            age: 18
        },
        {
            name: "Pavan",
            age: 23
        },
        {
            name: "Vishal",
            age: 22
        }
    ];
    const res = list.map((arr)=><p>Hey!... Name:<span>{arr.name}</span> and age is: <span>{arr.age}</span></p>);
  return (
    <div>
        <h1>Directly Showing</h1>
        {students.map(std => <li>{std}</li>)}
        <h1>Showing after storing in array</h1>
        {result}

        <h1>Showing Objects</h1>
        {res}

        <h1>Passing as Props</h1>
        {list.map(arr => <List2 list={arr}/>)}
    </div>
  )
}
