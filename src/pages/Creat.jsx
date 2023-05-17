import React from 'react'
import { useState } from 'react'

const Creat = () => {
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='shadow w-50 bg-light p-5'>
            <form onSubmit={handleSubmit}>
                <h3 className="text-center">
                    Add New User
                </h3>
                <div>
                    <label htmlFor="Name">Name</label>
                    <input onChange={e => setName(e.target.value)} className='form-control' type="text" placeholder='enter your name' value={name}/>
                </div>
                <div>
                    <label htmlFor="emmail">Email</label>
                    <input onChange={e => setEmail(e.target.value)} type="email" className='form-control' placeholder='enter your email' value={email}/>
                </div>
                <button className="btn btn-warning w-100">SUBMIT</button>
            </form>
        </div>
    </div>
  )
}

export default Creat