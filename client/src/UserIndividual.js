import React from 'react'

function UserIndividual({user}){
    return(
        <div className='container'>
            <div className='row'>
                <ul className='list-group'>
                <li className='list-group-item'>{user._id}</li>
                    <li className='list-group-item'>{user.userId}</li>
                    <li className='list-group-item'>{user.name}</li>
                    <li className='list-group-item'>{user.mobile}</li>
                    <li className='list-group-item'>{user.email}</li>
                </ul>

                <buton className='btn btn-success'>Edit</buton>
                <buton className='btn btn-danger'>Delete</buton>
                <hr className='mt-4'/>
            </div>

        </div>
    )
}

export default UserIndividual