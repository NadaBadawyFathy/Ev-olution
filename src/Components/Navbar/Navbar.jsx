import React, { useEffect, useState } from 'react'
import './Navbar.css'
function Navbar() {
  const [sticky, setSticky] = useState('');
  const [showNav, setShowNav] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky('dark-nav') : setSticky('');
    });
    
  }, []);
  return (
    <div className={`header ${sticky}`} id='header'>
      <div className="container">
      <div className="logo">
        <h2>Ev-olution</h2>
      </div>

      <div className="navbar">
      <i class="fa-solid fa-bars-staggered" onClick={()=> {
        if(showNav ===''){
          setShowNav('show')
          console.log(showNav)
        }else{
          setShowNav('')
          console.log(showNav)
        }
      }}></i>

      <div className={`ul ${showNav}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#explore">Explore</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact" className='contact'>Contact</a></li>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
