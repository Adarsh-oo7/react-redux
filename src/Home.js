import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
const Home = () => {
    const userz=useSelector((state)=>state.users)
    const navigate= useNavigate()
  return (
    <div className='container'>
        <h2> Crud App with Json Server</h2>
        <Link to={'/create'} className='btn btn-success my-3'>Create +</Link>
        <table className='table'>
            <thead>
            <th>ID</th>
            <th>name</th>
            <th>Email</th>
            <th>Action</th>
            </thead>
            <tbody>
{userz.map((user,index)=>(
    <tr key={index}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
            <Link to={`/edite/`+user.id} className='btn btn-sm btn-primary'>Edite</Link>
            <button className='btn btn-sm btn-danger ms-2'>Delete</button>

        </td>

    </tr>

))}
            </tbody>
        </table>
      
    </div>
  )
}

export default Home
