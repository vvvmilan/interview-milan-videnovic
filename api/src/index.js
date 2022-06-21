const cors = require('cors')
const express = require('express')

const tasksRouter = require('./routers/tasksRouter')
const app = express()
const port = 3050

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', tasksRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
