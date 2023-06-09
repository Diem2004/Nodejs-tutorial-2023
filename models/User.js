import mongoose, { Schema, ObjectId } from "mongoose";
//import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";
const User = mongoose.model('User',
    new Schema({
        id: { type: ObjectId},
        name :{
            type: String,
            required: true, //node null
            validate: {
                validator: (value) => value.length > 3,
                message: 'Username must be at least 3 character'
            }
        },
        email:{
            type: String,
            validate:{
                validator: (value) => isEmail,
                message: 'Email is incorrect format '
            }
        },
        password:{
            type: String,
            required: true
        },
        phoneNumber:{
            type: String,
            required:true
        }
    })
)
export default User


