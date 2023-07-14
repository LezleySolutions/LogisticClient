import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (props) => {
    const navigate = useNavigate()
    const UserData ={
        email: localStorage.getItem('Email'),
        password :localStorage.getItem('Password')
    }
    const {Component} = props
    useEffect(() =>{
        if(UserData.email == null ){
            navigate("/admin")
        }else{
            navigate("/Dashboard")
        }
    },[])
  return (
    <div>
      <Component />
    </div>
  )
}

export default Protected
