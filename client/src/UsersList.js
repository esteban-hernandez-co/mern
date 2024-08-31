import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserIndividual from './UserIndividual'
function UsersList(){

    const[userData, setUserData] = useState([])

    useEffect(() => {
        try {
            axios.get('api/user/getusers')
            .then(function(res){
              console.log('res')
              console.log(res.data)
              setUserData(res.data)
            })
            .catch(function(error){
              console.log(error)
            })
          } catch (error) {
            console.error(error)
          }
    }, [])

    //map userslist
    if(!userData){
        //
        console.log('map userList no Data')
    }else{
        const userList = userData.map(user => {
            return(
                <div key={user._id}>
                    <UserIndividual user={user}/>
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