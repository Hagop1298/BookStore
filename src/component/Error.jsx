import React from 'react'
import { NavLink } from 'react-router-dom'
import ErrorImg from "../assets//istockphoto-943289962-1024x1024.jpg"
import "../style/index.css"
const Error = () => {
  return (
    <div style={{display:"flex" , justifyContent:"center", alignItems:"center", marginTop:"auto"}}>
    {/* <img src={ErrorImg} className="image" alt="error" style={{width:"30%", height:"30%"}}/> */}
    <h1 style={{color:"white"}}>🙁 404 NOT FOUND 🙁</h1>
    </div>
  )
}

export default Error