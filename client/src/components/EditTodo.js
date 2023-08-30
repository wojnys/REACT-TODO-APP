import React, { useState } from 'react'

function EditTodo({todo}) {
 
    const [description, setDescription] = useState(todo.description)

    const updateTodo = async(e) => {
        e.preventDefault()
        try {
            const body = { description }
            const response = await fetch("/todos/"+todo.todo_id, {
                method: "PUT",
                headers: { "Content-Type" : " application/json" },
                body: JSON.stringify(body)
            })

            window.location = "/"
        } catch (error) {
            console.log(error.message)
        }
    }


  return (
    <div>
  <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`} onClick={() => {setDescription(todo.description)}}>EDIT</button>

  <div className="modal fade" id={`id${todo.todo_id}`} role="dialog">
    <div className="modal-dialog">

      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">EDIT TASK</h4>
        </div>
        <div className="modal-body">
            <h1>         </h1>
            <input type="text" className='form-control' value={description}  onChange={(e) => {setDescription(e.target.value)}}/>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={(e) => {updateTodo(e)}}>SAVE</button>
        </div>
      </div>
      
    </div>
  </div>
    </div>

  )
}

export default EditTodo