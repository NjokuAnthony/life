import React, { useState } from 'react'

const Update = () => {
const[updateName, setUpdate] = useState("")
const[updatEmail, setUpdatemail] = useState("")


const handleUpdate = (e) => {
    e.preventUpdate()
}

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-item-center'>
        <div className='shadow w-50 bg-light p-5'>
            <form onSubmit={handleUpdate}>
                <h3 className="text-center">
                    Update User
                </h3>
                <div>
                    <label htmlFor="Name">Name</label>
                    <input onChange={e => setUpdate(e.target.value)} className='form-control' type="text" placeholder='enter your name' value={updateName}/>
                </div>
                <div>
                    <label htmlFor="emmail">email</label>
                    <input onChange={e => setUpdatemail(e.target.value)} type="email" className='form-control' placeholder='enter your email' value={updatEmail}/>
                </div>
                <button className="btn btn-primary w-100">SUBMIT</button>
            </form>
        </div>
    </div>
  )
}

export default Update