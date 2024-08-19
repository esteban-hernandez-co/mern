import React from 'react'
function AddUser(){
    function addUser(){
       
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
                        <input type='text' className='form-control'></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input type='email' className='form-control'></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='mobile' className='form-label'>Mobile</label>
                        <input type='number' className='form-control'></input>
                    </div>

                    <button onClick={addUser} className='btn btn-success'>Save </button>
                </div>
            </div>
        </div>
    )
}

export default AddUser