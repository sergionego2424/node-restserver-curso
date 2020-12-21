require('./config/config');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const puerto = process.env.PORT;


app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

app.get('/usuario' , (req , res) => {
	res.json('get usuario')
});

app.post('/usuario' , (req , res) => {

	const body = req.body;

	if(body.nombre === undefined){
		res.status(400).json({
			ok : false,
			mensaje : 'el nombre es necesario'

		})
	}else{
		res.json({
			persona : body
		})
	}
});

app.put('/usuario/:id' , (req , res) => {

	const id = req.params.id;

	res.json({
		id
	})

});

app.delete('/usuario' , (req , res) => {
	res.json('delete usuario')
});

app.listen(puerto , () => console.log(`escuchando en el puerto ${puerto}`))
