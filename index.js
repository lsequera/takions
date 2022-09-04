const http = require('http')
const fs = require('fs')
const port = 5000

const server = http.createServer((req, res) => {
    const read = fs.createReadStream('./index.html')
    read.pipe(res)
})

server.listen(port)
console.log(`Sever listen on port ${port}`)
