const express = require("express")
const app = express()
const morgan = require("morgan")
const cors = require("cors")
const port = 5000

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))


const usersRoutes = require("./routes/users")
app.use("/users", usersRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })