import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserIndividual from './UserIndividual'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import DataTable from './DataTable'


function UsersList(){

    const[userData, setUserData] = useState([])

    useEffect(() => {
            try {
                axios.get('api/user/getusers')
                .then(function(res){
                  console.log('response getusers')
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
            

            {<DataTable data={userData}  /> || <Skeleton count={5} />  }
        </div>
    )
    
    
}

export default UsersList