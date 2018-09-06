var socket = io();

    socket.on('connect', function(){
        console.log('conectado');
    });

    // los on son para ESCUCHAR succesos
    socket.on('disconnect', function(){
        console.log('Conexion perdida');
    },);
    
    // los emits son para ENVIAR/EMITIR informacion
    socket.emit('enviarMensaje', {
        usuario: 'Mattias',
        mensaje: 'de donde sos'
    }, function(resp) {
        console.log('Respuesta server: ', resp);
    });

    // ESCUCHAR información
    socket.on('enviarMensaje', function(message){
        console.log('Servidor: ', message);
    });