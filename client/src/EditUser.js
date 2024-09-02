import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function EditUser(){

    const params = useParams()

    //Hooks
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[mobile, setMobile] = useState('')

    useEffect(()=> {
        try {
            axios.get('api/user/getuserdata', {_id: params._id})
            .then(function(res){
              console.log('res')
              console.log(res.data)
            })
            .catch(function(error){
              console.log(error)
            })
          } catch (error) {
            console.error(error)
          }
        
    }, [])

    return (
        <div>
            <h2>Edit a User</h2>
            <h3>User ID is {params._id}</h3>
        </div>
    )
}

export default EditUser