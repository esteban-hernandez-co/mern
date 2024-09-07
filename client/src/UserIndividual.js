import axios from 'axios'
import React from 'react'
import {Link} from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


function UserIndividual({user}){
    function deleteUser(user){
        confirmAlert({
            title: `Confirm to delete ${user.name} `,
            message: 'Are you sure to do this?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    try{
                        axios.post('/api/user/deleteuserdata', user)
                        .then(res =>{
                                alert(res.data)

                        })
                    }catch(error){
                        console.log(error)
                    }
                }
              },
              {
                label: 'No',
                onClick: () => {}
              }
            ]
        })
        
        
        
        
    }

    return(
        <div className='container'>
            <div className='row'>
            <div className='col-sm-6 offset-3'>
                <ul className='list-group'>
                    <li className='list-group-item'>{user._id}</li>
                    <li className='list-group-item'>{user.userId}</li>
                    <li className='list-group-item'>{user.name}</li>
                    <li className='list-group-item'>{user.mobile}</li>
                    <li className='list-group-item'>{user.email}</li>
                    
                </ul>

                <Link to={`/edituser/${user._id}`}><li className='btn btn-success'>Edit</li></Link>
                &nbsp;
                <buton className='btn btn-danger' onClick={()=> {deleteUser(user)}}>Delete</buton>
                <hr className='mt-4'/>

            </div>
                
            </div>

        </div>
    )
}

export default UserIndividual