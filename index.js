const express = require('express');
const app = express()
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 4000


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/login', (req, res)=>{
    res.send("<h1>This is Login page</h1>")
})

app.get('/register', (req, res)=>{
    res.send("<h2>This is register page</h2>")
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})