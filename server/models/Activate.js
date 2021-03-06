const {Schema, model}  = require('mongoose')

const Activate = new Schema({
    email: { type:String, required:true, unique:true },
    verification: { type:String, required:true },
    s_user_temp: { type:String, required:true},
    data_create: { type:Date, required:true, default: Date.now()},
    date_accept: { type:Date, default: null}
})

module.exports = model('Activate', Activate)