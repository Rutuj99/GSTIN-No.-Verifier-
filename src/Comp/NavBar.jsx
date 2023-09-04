import React from 'react'
import "../CSS/styles.css"


export default function NavBar() {
  return (
    <div className='main-container'>
    <div className='header-box-one'>
    <img style={{height:"80px",width:"50px",display:"inline"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/564px-Emblem_of_India.svg.png?20230324135030" alt="logo-png"></img>
       <span className='Heading-name'>GOOD AND SERVICE TAX</span>
       </div>
    <header className='nav-flex'>

       <a href='#'>Home</a>
       <a href='#'>Date</a>
       <a href='#'>Services</a>
       <a href='#'>Info</a>
       <a href='#'>Help</a>
       <a href='#'>About</a>
        
       </header>
    </div>
  )
}
