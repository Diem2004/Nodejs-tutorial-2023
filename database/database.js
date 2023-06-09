import mongoose from "mongoose";
import { print, OutputType } from "../helpers/print.js";
import Exception from "../exceptions/Exception.js";
async function connect() {
  try {
    let connection = await mongoose.connect(process.env.MONGO_URI);
    print("connect mongoose successfull", OutputType.SUCCESS);
    return connection;
  } catch (error) {
    //let errorMessage = error.code
    const { code } = error;
    debugger;
    if (error.code == 8000) {
      throw new Exception(Exception.WRONG_DB_USERNAME_PASSWORD);
    } else if (code == "ENOTFOUND") {
      //chalk
      throw new Exception(Exception.WRONG_CONNECTION_STRING);
    }
    throw new Exception(Exception.CANNOT_CONNECT_MONGOOSE);
  }
}
export default connect;
