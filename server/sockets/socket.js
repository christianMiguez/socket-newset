const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');  
    client.emit('enviarMensaje',  {
        usuario: 'Admin',
        message: 'Bienbenidos a esta aplicación'
    });
    
    client.on('disconnect', () => {
        console.log('Usuario perdió su conexión');
    });

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        // if(message.usuario) {
        //     callback({
        //         resp: 'Todo ok'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo MAAAAAAAAAAAAAAAAAAAAAAAAAL'
        //     });
        // }

        client.broadcast.emit('enviarMensaje', data)

        

    });
});