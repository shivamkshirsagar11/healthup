const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    email:String,
    full_name:String,
    mobile_no:String,
    age:Number,
    dob:String,
    address:String,
});

module.exports = mongoose.model('User', UserSchema);
