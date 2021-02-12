import mongoose from 'mongoose'


const connectDb=async ()=>{
    try{

        const conn=await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true ,useUnifiedTopology: true,useCreateIndex:true});
        console.log(`Database is connected`)
           
         
    }catch(Error){
            console.log('error : ',Error);
    }
}

export default connectDb;

