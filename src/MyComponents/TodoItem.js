import React from 'react';

export const TodoItem = ({todos,onDelete}) => {

    const todoitemstyle = {
        borderBottom:"1px solid #000"
    }

    return (
        <div className='py-1'>
            <div className="py-3" style={todoitemstyle}>
                <h4>{todos.title}</h4>
                <p>{todos.desc}</p>
                <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todos)}}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem;
