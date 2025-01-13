import mongoose from "mongoose";
import {DB_NAME}   from "../constants.js";

const connection= async()=>{
    try {
      const connectionInstance = await mongoose.connect(
        `${process.env.MONGODB_URI}/${DB_NAME}`
      );
      console.log(
        `\n MongoDB connected  `
      ); /*${connectionInstance.connection.host}*/
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
    }
}

export default connection;  