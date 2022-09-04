const express = require('express')

const app = express()
const port = 6000

app.get('/', (req, res) => {
    res.sendFile('./index.html',{
        root: __dirname
    })
})

app.use(express.static('./'));

app.listen(port)
console.log(`Sever listen on port ${port}`)
