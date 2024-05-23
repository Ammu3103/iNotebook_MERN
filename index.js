const connectToMongo = require("./db");
const express = require('express'); 
var cors = require('cors')

connectToMongo();

const app = express()
const port = 5000

//midware

app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'))

// app.get('/api/v1/login', (req, res) => {
//   res.send('Login!')
// })

// app.get('/api/v1/signup', (req, res) => {
//   res.send('signup!')
// })

app.listen(port, () => {
  console.log(`iNotebook backend listening on port http://localhost:${port}`)
})
