import Exception from "../exceptions/Exception.js";
import { print, OutputType } from "../helpers/print.js";
import User from "../models/index.js";
const login = async ({ email, password }) => {
  print("login user in user repository ha ha", OutputType.INFORMATION);
};
const register = async ({ name, email, password, phoneNumber, address }) => {
  try{
    let existingUser = await User.findOne({email}).exec()
    if(!!existingUser){
      throw new Exception(Exception.USER_EXIST)
    }
  }catch(exception){

  }
  // print(
  //   "register user with name:" +
  //     name +
  //     " email:" +
  //     email +
  //     " password" +
  //     password +
  //     " phoneNumber" +
  //     phoneNumber +
  //     " address: " +
  //     address, OutputType.INFORMATION
  // );
};
export default {
  login,
  register,
};
