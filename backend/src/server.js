const { WebSocketServer } = require('ws') 
require('dotenv').config()


const wss = new WebSocketServer({ port: process.env.PORT || 8080 })

wss.on('connection', (ws) => {

    ws.on('error', console.error)

    ws.on('message', (data)=>{
        //quando enviar a mensagem
        wss.clients.forEach((client) => client.send(data.toString()))
    })

    console.log('Client connected')

})