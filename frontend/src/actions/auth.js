import {USER_LOGOUT,USER_LOGIN_SUCCESS,USER_LOGIN_REQUEST,USER_LOGIN_FAIL,USER_REGISTER_SUCCESS,USER_REGISTER_REQUEST,USER_REGISTER_FAIL,EMAIL_OTP_FAIL,EMAIL_OTP_SUCCESS,EMAIL_OTP_REQUEST} from '../constants/auth'
import axios from 'axios'

export const login =(email,password) => async (dispatch)=>{

    try {
         
        dispatch ({
            type:USER_LOGIN_REQUEST
        })

        const config={
            headers:{
                'Content-Type':'application/json'
            },
        }
        
        const {data}=await axios.post('/api/user/signin',{email,password},config);
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })

        // localStorage.setItem('userInfo',JSON.stringify(data));

    } catch (error) { 
        
        dispatch({
            type:USER_LOGIN_FAIL,
            payload: 'Invalid Email & Password'
        })

        
    }

   

}


export const emailOtp=(email)=>async(dispatch)=>{

    try {

        dispatch({type:EMAIL_OTP_REQUEST});
        const config={
            headers:{
                'Content-Type':'application/json'
            },
        }

        const {data}= await axios.post('/api/user/otp',{email},config);
        dispatch({
            type:EMAIL_OTP_SUCCESS
        })
        
    } catch (error) {
        dispatch({
            type:EMAIL_OTP_FAIL,
            payload: 'Error in otp'
        })
    }

}

export const register =(form) => async (dispatch)=>{

    try {
         
        dispatch ({
            type:USER_REGISTER_REQUEST
        })

        const config={
            headers:{
                'Content-Type':'application/json'
            },
        }
        
        const {data}=await axios.post('/api/user/signup',form,config);
        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        })
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        // localStorage.setItem('userInfo',JSON.stringify(data));

    } catch (error) { 
        
        dispatch({
            type:USER_REGISTER_FAIL,
            payload: 'Please Write valid Email & Password'
        })

        
    }
}

export const logout=()=>async(dispatch)=>{
    
    dispatch({
        type:USER_LOGOUT
    })

}