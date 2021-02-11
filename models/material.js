import mongoose from 'mongoose'

const materialSchema=new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        pdf:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            default:0
        },
       branch:{
           type:String,
           required:true
       },
       sem:{
           type:String,
           required:true
       }
        
       
    },{ timestamps: true })

    const Material = mongoose.model('Material',materialSchema);
    export default Material;
