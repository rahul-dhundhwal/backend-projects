import mongoose,{Schema} from "mongoose";

const userSchema=new Schema ({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }  ,
    role:{
        type:String,
        default:"basic",
        enum:["basic","admin"]
    }   
},{
    timestamps:true
})

export const User=mongoose.model("User",userSchema);   //users is the name of the collection in the database