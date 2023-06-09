import { print, OutputType } from "../helpers/print.js"
export default class Exception extends Error {
    static WRONG_DB_USERNAME_PASSWORD = 'Wrong database is username and password'
    static WRONG_CONNECTION_STRING = 'Wrong server name/connection string'
    static CANNOT_CONNECT_MONGOOSE = 'Can not connect to mongoose'
    static USER_EXIST = 'User already exists'
    static CANNOT_REGISTER_USER = "Cannot register user"
    constructor(message){
        super(message)//call constructor of parent class(Error)
        print(message,OutputType.ERROR)
    }
}