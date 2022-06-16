const tasks = require('./database/tasks.json')
const express = require('express')
const app = express()
const port = 3050

app.get('/', (req, res) => {
    res
        .status(200)
        .json({
            data: tasks
        })
})

app.post('/', (req, res) => {
    res.send('Got a POST request')
})

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})

app.patch('/user', (req, res) => {
    res.send('Got a PATCH request at /user')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

