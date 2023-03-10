const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please enter a name']
    },
    email:{
        type: String,
        required: [true, 'Please enter a email'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Please enter a password']
    },    
}, {
    timestams: true
})

module.exports = mongoose.model('User', userSchema)