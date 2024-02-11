import mongoose  from "mongoose";
const userdataSchema = new mongoose.Schema({
   name: {
       type: String, 
   },
   mobile:{
       type: String, 
   },
   linkedin:{
       type: String, 
   },
   gitgub:{
       type: String, 
   },
   resume:{
       type: String, 
   },
    
   }, 

 {timestamps: true}  
);

const UserData = mongoose.model('UserData', userdataSchema);

export default UserData;