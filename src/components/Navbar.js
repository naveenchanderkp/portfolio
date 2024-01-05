import React,{useEffect, useState}from 'react'
import { Link,useLocation } from 'react-router-dom'
import '../styles/NavBar.css'
import ReorderIcon from '@mui/icons-material/Reorder'

function Navebar() {
  const[expandNavBar,setExpandNavbar] = useState("")

  const location = useLocation();

  useEffect(()=>{
    setExpandNavbar(false)
  },[location])
  return (
    <div className='navbar' id={expandNavBar ?"open" : "close"}>
        <div className='togglebutton'>
        <button onClick={()=>{
          setExpandNavbar((prev)=>!prev);
        }}>
          
          <ReorderIcon/>
        </button>
        </div>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/project">Project</Link>
        </div>
    </div>
  )
}

export default Navebar