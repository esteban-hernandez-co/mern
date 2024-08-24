import React, { useState } from 'react'
import uniquid from 'uniqid'
import axios from 'axios'

function AddUser(){

    //hooks
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[mobile, setMobile] = useState('')

    function addUser(){
       var user = {
            name: name,
            email: email,
            mobile: mobile,
            userId: uniquid()

       }
       console.log(user)

       axios.post('/api/user/adduser', user)
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
                <h2 className='mt-4'>Add a User</h2>
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

                    <button onClick={addUser} className='btn btn-success'>Save </button>
                </div>
            </div>
        </div>
    )
}

export default AddUser