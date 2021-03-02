import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {update } from '../actions/auth'
import {Link, useHistory} from 'react-router-dom'
const EditProfile = () => {
    const {userInfo}=useSelector(state=>state.userLogin);
    const {user}=userInfo;
    const [name, setName] = useState(user.name)
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [branch, setBranch] = useState(user.branch)
    const [admission, setAdmission] = useState(user.admission)
    const [isError,setIsError]=useState(false);
    
    const {loading,success,error}=useSelector(state=>state.updateUserProfile)
    const history=useHistory()
    const dispatch=useDispatch();

    const OnSubmit=(e)=>{
         e.preventDefault();
         if(password2===password)
         {
           dispatch(update({name,branch,admission,password}));   
         }
         else{
           setIsError(true);
         }
    }
    useEffect(()=>{
          if(success)
          {
            history.push('/profile');
          }
    },[success,history]);
    return (
        <div>
           {loading && <h3>Loading...</h3>}
           {(error || isError ) && <h3>Edit your Detail Properly</h3>}
           {success && <h3>Your profile is Updated</h3>}
           <Link to='/profile' className='btn btn-light my-3' >Go Back</Link>
           <h3>Email: {user.email} </h3><br/>
           <form className='form' onSubmit={OnSubmit}>
           <p>Edit your Profile</p>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Name'
                  name='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  
                />
              </div>
              
              <div className='form-group'>
                <select
                  name='branch'
                  value={branch}
                  
                  onChange={(e) => setBranch(e.target.value)}>
                  <option>* Select Your branch</option>
                  <option value='M&C'>M&C</option>
                  <option value='CSE'>CSE</option>
                  <option value='ECE'>ECE</option>
                  <option value='Mechanical'>Mechanical</option>
                  <option value='Chemical'>Chemical</option>
                  <option value='Electrical'>Electrical</option>
                </select>
              </div>

              <div className='form-group'>
                <select
                  name='admission'
                  
                  value={admission}
                  onChange={(e) => setAdmission(e.target.value)}>
                  <option>* Select admission year</option>
                  <option value='2000'>2000</option>
                  <option value='2001'>2001</option>
                  <option value='2002'>2002</option>
                  <option value='2003'>2003</option>
                  <option value='2004'>2004</option>
                </select>
              </div>
              <p>Want to Change password</p>
              <div className='form-group'>
                <input
                  type='password'
                  placeholder='Update Password'
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  placeholder='Confirm update Password'
                  name='password2'
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  
                />
              </div>
              <button
                type='submit'
                className='btn btn-primary'
                >
                Update
              </button>
         
        </form>
        </div>
    )
}

export default EditProfile
