const express = require('express');
const app = express();
const cors = require('cors')
const port = 4000
const pool = require("./db")

//mildware
app.use(cors())
app.use(express.json()) //req.body


//create a todo
app.post('/todos', async (req, res) => {
    try {
        const { description } = req.body
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",[description])
        res.json(newTodo.rows[0])

    } catch (error) {
        console.log(error.message)
    }
});

//get all todos
app.get('/todos', async (req,res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo")
        res.json(allTodos.rows)
    } catch (error) {
        console.log(error.message)
    }
})

//get specific todo
app.get('/todos/:id', async(req,res) => {
    try {
        const { id } = req.params 
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1",[id])
        res.json(todo)
    } catch (error) {
        console.log(error.message)
    }
})

//update todo
app.put('/todos/:id',async (req,res) => {
    try {
        const { id } = req.params
        const { description } = req.body
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id ])
        res.json("todo was updated")
    } catch (error) {
        console.log(error.message)
    }
})

//update status of todo - finished or not
app.put('/todos/finished/:id',async (req,res) => {
    try {
        const { id } = req.params
        const updateTodo = await pool.query("UPDATE todo SET finished = True WHERE todo_id = $1",[ id ])
        res.json("todo is finisehd")
    } catch (error) {
        console.log(error.message)
    }
})

//deleet todo
app.delete("/todos/:id", async(req,res) => {
    try {
        const {id} = req.params
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id])
        res.json("deleted")
    } catch (error) {
        console.log(error.message)
    }
})




app.listen(4000, () => {
    console.log(`server is running on port ${port}`);
});
