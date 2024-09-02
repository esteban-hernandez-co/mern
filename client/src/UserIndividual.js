import React from 'react'
import {Link} from 'react-router-dom'

function UserIndividual({user}){
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
                <buton className='btn btn-danger'>Delete</buton>
                <hr className='mt-4'/>

            </div>
                
            </div>

        </div>
    )
}

export default UserIndividual