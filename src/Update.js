import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer'




const Update = () => {
    const {id}=useParams();
    const userz=useSelector((state)=>state.users)
    const existingUser = userz.filter(f=>f.id ==id)
    const {name,email}=existingUser[0]
    const [uname,setName]=useState(name)
    const [uemail,setEmail]=useState(email)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleUpdate=(event)=>{
        event.preventDefault();
        dispatch(updateUser({
            id:id,
            name:uname,
            email:uemail
        }))
        navigate('/')
    }


  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input value={uname} type='text' name='name' className='form-control' placeholder='Enter your name' onChange={e=>setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input value={uemail} type='email' name='email' className='form-control' placeholder='Enter your Email' onChange={e=>setEmail(e.target.value)}></input>
            </div>
            <br>
            </br>
            <button className='btn btn-info'>Update</button>
        </form>

    </div>
</div>
  )
}
export default Update
