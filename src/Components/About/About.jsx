import React from 'react'
import './About.css'
import img2 from '../../Assets/about.png'
function About() {
  return (
    <div className="about-us" id='about'>
        <div className="container">
            <div className="about">
                <div className="image"><img src={img2} alt=""/></div>
                <div className="choose">
                    <h2> <span>About</span> Us</h2>
                    <h4>Why Choose us?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Expedita, est. Doloremque sapiente veritatis laboriosam corrupti optio et maxime. Ad, 
                        amet explicabo eaque labore cupiditate quasi nostrum nemo recusandae id quibusdam? 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ab, dolores pariatur cum exercitationem, 
                        illo nisi veritatis vitae ea deleniti fugiat quisquam tempora, accusantium corrupti excepturi optio. Inventore, 
                        cupiditate recusandae.
                    </p>
                </div>
            </div>
            <button>Order Now</button>
        </div>
    </div>
  )
}

export default About
