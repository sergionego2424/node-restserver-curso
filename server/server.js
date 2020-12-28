require('./config/config');


const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');

const app = express();

const bodyParser = require('body-parser');
const puerto = process.env.PORT;


app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

app.use(require('./routes/usario'));


mongoose.connect(process.env.URLDB, 
	{ useNewUrlParser : true , useCreateIndex : true },
	(error, res) => {
	if(error){
		console.log('no ha funcionado '.red);
		return;
	}

	console.log('BASE DE DATOS ONLINE'.green)

});


app.listen(puerto , () => console.log(`escuchando en el puerto ${puerto}`))
