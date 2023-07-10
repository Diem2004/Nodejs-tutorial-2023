import Exception from "../exceptions/Exception.js";
import { print, OutputType } from "../helpers/print.js";
import User from "../models/index.js";
import bcrypt from 'bcrypt'
const login = async ({ email, password }) => {
  print("login user in user repository ha ha", OutputType.INFORMATION);
};
const register = async ({ name, email, password, phoneNumber, address }) => {
  //<------------------------->
  try{
    debugger
    const existingUser = await User.findOne({email}).exec()
    //console.log('existingUser:', existingUser)
    if(!!existingUser){
    throw new Exception(Exception.USER_EXIST)
    }
    //encrypt password, user bcrypt
    // sử dụng với mục đích đăng nhập
    // const isMatched = await bcrypt.compare(password, existingUser.password)
    // if(isMatched){

    // }
    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS))
    //insert to db
    const newUser = await User.create({
      name, email,
      password: hashedPassword,
      phoneNumber,
      address
    })
    return newUser
  }catch(exception){
    debugger
    //check model validation here
    throw new Exception(Exception.CANNOT_REGISTER_USER)

  }
  //<--------------------->
  // print(
  //   "register user with name:" +
  //     name +
  //     " email:" +
  //     email +
  //     " password: " +
  //     password +
  //     " phoneNumber: " +
  //     phoneNumber +
  //     " address: " +
  //    address, 
  // OutputType.INFORMATION
  // );
  //<-------------------------->
};
export default {
  login,
  register,
};

