import React, { useState } from 'react'

function InputTodo() {

    const [description, setDescription] = useState("")

    const onSubmitForm = async (e) => {
        e.preventDefault()
        try {
            const body = { description }
            const response = await fetch("/todos", {
                method: "POST",
                headers: { "Content-Type" : " application/json" },
                body: JSON.stringify(body)
            })

            window.location = "/"
        } catch (error) {
            console.log(error.message)
        }
    }

  return (
    <div className='container'>
        <form onSubmit={onSubmitForm} className="d-flex w-100 p-3" >
            <input type="text" className='form-control' value={description} onChange={e => setDescription(e.target.value)} placeholder="Type your task..."/>
            <input type="submit" value="Add" className='btn btn-success px-3 py-2 mx-2' />
        </form>
    </div>
  )
}

export default InputTodo