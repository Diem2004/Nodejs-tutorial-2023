import { body, 
  //params, 
  validationResult } 
  from "express-validator";
import { 
  userRepository, 
   } 
  from "../repositories/index.js";
  import {EventEmitter} from 'node:events'
  import HttpStatusCode from "../exceptions/HttpStatusCode.js";
  import Exception from "../exceptions/Exception.js";
  const myEvent = new EventEmitter()
  //listen 
  myEvent.on('event.register.user', (params) => {
    // console.log(`They talk about: ${JSON.stringify(params)}`)
  })

const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(HttpStatusCode.HttpStatusCode.BAD_REQUEST).json({ errors: errors.array() });
  }

  const { email, password } = req.body; // distru

  //call repository
  await userRepository.login({ email, password });
  res.status(HttpStatusCode.HttpStatusCode.OK).json({
    message: "Login user suscessfully",
    //data:'detail user here';
  });
};
const register = async (req, res) => {
  //dictracturing
  //kiểm tra dữ liệu truyền từ controller xuống repository
  const { 
    name, 
    email, 
    password, 
    phoneNumber, 
    address } = req.body;
  
    //event emitter
    //ko hieu
    myEvent.emit('event.register.user', {email, phoneNumber })
    try{
      debugger
      const user = await userRepository.register({
        name, 
        email, 
        password, 
        phoneNumber, 
        address })
        res.status(HttpStatusCode.OK).json({
          message: "register user suscessfull",
          data : user
        })
    }catch(exception){
      debugger
      res.status(HttpStatusCode.HttpStatusCode.INTERNAL_SERVER_ERROR).json({
        message: exception.toString(),
      })

    }
  
};
const getDetailUser = async (req, res) => {
  (req, res) => {
    res.send("POST register users");
  };
};
export default {
  login,
  register,
  getDetailUser,
};
console.log
