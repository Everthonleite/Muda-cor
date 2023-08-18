const http = require('http')

const fs = require('fs')

function readFile(response, file) {
    fs.readFile(file, function (error, data) {
        console.log(error)
        response.end(data)
    })
}


const server = http.createServer((request, response) => {
    console.log(request.url)
    if (request.url === '/doce') {
        readFile(response, 'agdoce.json')
    } else if (request.url === '/salgado') {
        readFile(response, 'agsalgada.json')

    }else if (request.url === '/crustaceo') {
        readFile(response, 'crustaceos.json')

    }else if (request.url === '/mamiferos') {
        readFile(response, 'mamiferos.json')

    } else {

        response.end('<html><h1>404 Not Found</h1></html>')

    }
})

server.listen(3001, () => {
    console.log("é hora do show")
})