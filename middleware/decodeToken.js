import jwt from 'jsonwebtoken'
import User from '../models/user.js'

export const authToken = async (req,res,next)=>{

    
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer') )
    {
        try {

            token=req.headers.authorization.split(' ')[1] 
          //  console.log("##SASASA  ",token);
            const decode=jwt.verify(token,process.env.JWT_SECRET);
            console.log(decode);
            req.user=await User.findById(decode.id).select('-password')
         //   console.log(req.user._id)
            next();
            
        } catch (error) {
            res.status(422)
            throw new Error('Invalid token ,may be token is wrong')
    
            
        }

    }
    if(!token){
         
        res.status(422)
        throw new Error('Invalid token')

    }

}

