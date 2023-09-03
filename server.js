const { error } = require('console');
const { write } = require('fs');
const http = require('http'); //Modulo Http
const fs = require('fs');

var host = '127.0.0.1'; //host del protocolo

var puerto = 8080; //puerto del host

//Creación del servidor

var servidor =http.createServer(function (req, res) {

    res.writeHead(200, {'content-Type': 'text/html'});
    fs.readFile('index.html', (error, data)=>{
        if(error) {
            res.writeHead(404);
            res.write("Archivo no encontrado");
        } else{
            res.write(data);
        }
        res.end();
    })

})

servidor.listen(puerto, host, ()=>{
        console.log('Servidor listening on', host, puerto);
    })