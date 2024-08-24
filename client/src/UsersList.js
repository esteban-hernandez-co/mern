import React, { useEffect, useState } from 'react'
import axios from 'axios'
import IndividualUser from './IndividualUser'
function UsersList(){

    const[userData, setUserData] = useState([])

    useEffect(() => {
        async function getUser() {
            try {
              const response = await axios.get('api/user/getusers')
              console.log(response.data);
            } catch (error) {
              console.error(error);
            }
        }
        getUser()
        
    }, [])
    return (
        <div>
            <h2>Users List</h2>
            <IndividualUser/>
        </div>
    )
}

export default UsersList