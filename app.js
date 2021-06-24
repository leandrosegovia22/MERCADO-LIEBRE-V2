const express = require ('express');
const app = express ();
const port = 3030;
const path = require('path');
const views = path.join(__dirname,'views')

app.use(express.static('public')) 


app.get('/', (req,res) =>{ res.sendFile(path.join(__dirname, 'views', 'home.html'))}) //req y res son un callback

//app.get('/contactos', (req,res) =>{ res.sendFile(path.join(__dirname, 'views', 'contacto.html'))})

app.listen(port,() => console.log('Servidor corriendo en el puerto ' + port ))