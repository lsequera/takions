const express = require('express')

const app = express()
const port = 3000

const path = require('path')
app.use('./takion', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile('./index.html',{
        root: __dirname
    })
})

app.use(express.static('/'));

app.listen(port)
console.log(`Sever listen on port ${port}`)
