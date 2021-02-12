import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
const userSchema=new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        branch:{
            type:String,
            required:true
        },
        admission:{
            type:String,
            required:true
        },
        photo:{
            type:String
        }
       
    },{ timestamps: true })


//password dcrypt
userSchema.methods.matchPassword= async function(enterPAssword){
    return await bcrypt.compare(enterPAssword,this.password)
}

//password encrypt:  pre is used run this midlleware automatically before save and will when password modified.........
userSchema.pre('save',async function (next){
 
    if(!this.isModified('password')){
        next();
    }

    const salt=await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password,salt);

})

    const User = mongoose.model('User',userSchema);
    export default User;
