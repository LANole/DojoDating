var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
 name: {type: String},
 email: {type: String},
 DOB:{type: Date},
 password: {type: String},
 gender: {type: String},
 relationship_preferences: {type: String},
 height: {type: Number, minlength: 1},
 weight: {type: Number, minlength: 2},
 body_type: {type: String},
 hair_color: {type: String},
 eye_color: {type: String},
 smoke: {type: String },
 drink: {type: String},
 search_radius: Number,
 bio: {type: String, minlength: 150, maxlength:500},
 city: {type:String},
 state: {type:String},
 arts: String,
 auto: String,
 dancing: String,
 education: String,  
 food: String,
 literature: String,
 music: String,
 nature: String,
 outdoor_activites: String,
 sports: String,
 technology: String

},{timestamps: true})
mongoose.model('User', UserSchema);
var User = mongoose.model('User');