const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const rolesValidos = {
	values : ['ADMIN_ROLE' , 'USER_ROLE'],
	message : '{VALUE} no es un rol valido'
}

const Schema = mongoose.Schema;

let usuarioSchema = new Schema({
	nombre : {
		type : String,
		required : [true ,  'El nombre es necesario']
	},
	email : {
		type : String ,
		unique : true,
		required : [true , 'El correo es necesario']
	},
	password : {
		type : String,
		required : [true , 'La contraseña es obligatoria']
	},
	img : {
		type : String ,
		required : false
	},
	role : {
		type : String ,
		required : true,
		default : 'USER_ROLE',
		enum : rolesValidos
	},
	estado : {
		default : true,
		type : Boolean
	},
	google : {
		default : false,
		type : Boolean
	}
});

usuarioSchema.methods.toJSON = function(){
	let userObject = this.toObject();
	
	delete userObject.password;

	return userObject;
}

usuarioSchema.plugin(uniqueValidator, {
	message : '{PATH} debe de ser unico'
})


module.exports = mongoose.model('Usuario' , usuarioSchema);