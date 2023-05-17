import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
const users = useSelector((state) => state.users)
console.log(users)

  return (
    <div className='container mt-5'>
        <h2 className='text-center text-secondary my-5'>CRUD App Using Redux Toolkit</h2>
        <Link to="/creat" className='btn btn-success my-3'>Create +</Link>
        <table className='table'>
             <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>ACTION</th>
                </tr>
             </thead>
             <tbody>
               {
                users.map((user) => (
                    <tr>    
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className='btn btn-primary me-2'>edit</button><button className='btn btn-danger'>delete</button>
                    </td>
                </tr>
                ))
               }

             </tbody>
        </table>
        
    </div>
  )
}

export default Home