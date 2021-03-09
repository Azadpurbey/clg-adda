import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

import {userListAction} from '../actions/auth'
import Loader from './Loader';

const UserList = () => {


    const dispatch=useDispatch();
    const {laoding,error,userLists}=useSelector(state=>state.userList);
    // const {user}=userLists;
   console.log(userLists && userLists.user[0]._id)
   useEffect(()=>{
       dispatch(userListAction());
   },[dispatch])

    return (
        <>
          {laoding?<Loader/>:(
            <Table striped hover responsive bordered className='table-sm'>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Branch</td>
                        <td>Admission</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                   {userLists && userLists.user.map(u=>(
                       <tr key={u._id}> 
                        <td>{u.name}</td>
                        <td><a href={`mailto:${u.email}`}>{u.email}</a></td>
                        <td>{u.branch}</td>
                        <td>{u.admission}</td>
                        <td>    
                            <Link
                                to={`/user/${u._id}`}
                                // onClick={profileHandler}
                                className='btn btn-primary'>
                                View 
                            </Link>
                        </td>
                        <td>    
                            <Button
                                
                                // onClick={profileHandler}
                                className='btn btn-primary'>
                                Follow
                            </Button>
                        </td>
                       </tr>
                   ))}
                </tbody>

            </Table>

          )}
        </>
    )
}

export default UserList
