import mongoose,{Schema} from "mongoose";

const commentSchema= new Schema({
    content:{
        type:String,

    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"user"
    }
},{
    timestamps:true
})

export const commment = mongoose.model("comment",commentSchema);