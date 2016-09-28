var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
 name: {type: String},
 email: {type: String},
 DOB:{type: Date},
 password: {type: String},
 relationship_preferences: {type: String},
 height: {type: Number, minlength: 1},
 weight: {type: Number, minlength: 2},
 body_type: {type: String},
 hair_color: {type: String},
 eye_color: {type: String},
 smoking: {type: String },
 drinking: {type: String},
 search_radius: Number,
 bio: {type: String, minlength: 150},
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
 activity_level: String,
 sports: String,
 technology: String

},{timestamps: true})
mongoose.model('User', UserSchema);
var User = mongoose.model('User');