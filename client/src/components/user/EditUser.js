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
        axios.post('/api/user/userdata', {_id:params._id}).then(res => {
            console.log(res.data[0])
            const userData = res.data[0]
            setName(userData.name)
            setEmail(userData.email)
            setMobile(userData.mobile)
        })
    }, [])

    //edit function
    function editUser(){
        const updateUser = {
            name: name,
            email: email,
            mobile: mobile,
            _id: params._id
        }

        axios.put('/api/user/userdata', updateUser)
       .then(res =>{
            alert(res.data)

       })
       .then(err => {
        console.log(err)
       })
    }

    return (
        <div className='container'>
            <div className='row'>
                <h2 className='mt-4'>Edit User</h2>
            </div>

            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Name</label>
                        <input type='text' className='form-control' value={name} onChange={(e)=> {setName(e.target.value)}}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input type='email' className='form-control' value={email} onChange={(e)=> {setEmail(e.target.value)}}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='mobile' className='form-label'>Mobile</label>
                        <input type='number' className='form-control' value={mobile} onChange={(e)=> {setMobile(e.target.value)}}></input>
                    </div>

                    <button onClick={editUser} className='btn btn-success'>Save </button>
                </div>
            </div>
        </div>
    )
}

export default EditUser