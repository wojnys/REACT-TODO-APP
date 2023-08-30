import React, {useEffect, useState} from 'react'
import EditTodo from './EditTodo';
import FinishedTodo from './FinishedTodo';

function ListTodo() {

        const [todosData, setTodosData] = useState([])

        useEffect(() => {
            const getTodos = async () => {
                try {
                    const response = await fetch("/todos");
                    const JSONdata = await response.json();
                    setTodosData(JSONdata);
                } catch (error) {
                    console.log(error.message);
                }
            };
        
            getTodos();
        }, []);

        const deleteTodo = async (todo_id) => {
            try {
                const deleteTodo = await fetch("/todos/"+todo_id, {
                    method: "DELETE",
                })
                // I dont want to refresh my page = so I just filter data and if todo_id === todo.todo_id so I will ignore it
                setTodosData(todosData.filter(todo => todo.todo_id !== todo_id))
                console.log("successfuly deleted")
            } catch (error) {
                console.log(error.message)
            }
        }


  return (
    <div className='container'>
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">TASK</th>
      <th scope="col">EDIT</th>
      <th scope="col">DELETE</th>
      <th scope="col">STATUS</th>
    </tr>
  </thead>
  <tbody>
        { todosData.map(todo => (
            <tr key={todo.todo_id}>
                <td>{ todo.todo_id }</td>
                <td>{ todo.description }</td>
                <td><EditTodo todo = {todo}/></td>
                <td><button className='btn btn-danger' onClick={() => {deleteTodo(todo.todo_id)}}>Delete</button></td>
                <td><FinishedTodo todo = {todo}/></td>
            </tr>
        )) }
  </tbody>
</table>

    </div>
  )
}

export default ListTodo