import React, { useEffect, useState } from 'react'
import axios from 'axios'
import IndividualUser from './IndividualUser'
function UsersList(){

    const[userData, setUserData] = useState([])

    async function getUsers() {
        try {
          const response = await axios.get('api/user/getusers').then(res => {
            console.log('res')
            console.log(res.data)
            setUserData(res.data)
          })
          console.log('response')
          console.log(response)
          
          
        } catch (error) {
          console.error(error)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    //map userslist
    if(!userData){
        getUsers()
    }else{
        const userList = userData.map(user => {
            return(
                <div>
                    <IndividualUser user={user}/>
                </div>
            )
        })
        return (
            <div>
                <h2>Users List</h2>
                {userList}
            </div>
        )
    }
    
}

export default UsersList