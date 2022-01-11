import { buildQueries } from '@testing-library/react';
import React from 'react'
import {TodoItem} from './TodoItem';

export const Todos = (props) => {

    let notodostyle = {
        fontSize: "7em",
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
        background: "red"
    }


    return (
        <div className='container'>
           <h3 className='my-3'>Todos List</h3>

           {props.todos.length===0? <p className='' style={notodostyle}>No Todos to Display : )</p>:
           props.todos.map((todos)=>{
               return <TodoItem todos={todos} key={todos.sno} onDelete={props.onDelete}/>
            })
           }
        </div>
    )
}

export default Todos;

