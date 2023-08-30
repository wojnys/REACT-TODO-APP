import React, {useState} from 'react'

function FinishedTodo({todo}) {

    const finishedTodo = async (todo_id) => {
        try {
            const finishedTodo = await fetch("/todos/finished/"+todo_id, {
                method: "PUT",
            })
      
            window.location = "/"
        } catch (error) {
            console.log(error.message)
        }
    }

  return (
    <div>
            {/* <button  class="btn btn-info" onClick={() => {finishedTodo(todo.todo_id)}}>test</button>{todo.finished ? <h1>FINISHED</h1> : <h7>not yet</h7>} */}
        <button
            className="rounded border"
            onClick={() => {
                    if (!todo.finished) {
                        finishedTodo(todo.todo_id);
                    }
                }}
            >
            {todo.finished ? <div className='btn btn-success'>FINISHED</div> : <div className='btn btn-danger'>NOT FINISHED</div>}
            </button>

    </div>
  )
}

export default FinishedTodo