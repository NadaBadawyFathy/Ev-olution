import React from 'react'
import './Background.css'
import video1 from '../../Assets/video1.mp4'
import img1 from '../../Assets/image1.png'
import img2 from '../../Assets/image2.png'
import img3 from '../../Assets/image3.png'
function Background({playStatus,heroCount}) {
    
    if (playStatus) {
        return(
            <video className='background fade-in' muted loop autoPlay id='home'>
                <source src={video1} type='video/mp4'/>
            </video>
        )
    }
    else if (heroCount===0) {
        return(
            <img className='background fade-in' src={img1} alt="" id='home'/>
        )
    }
    else if (heroCount===1) {
        return(
            <img className='background fade-in' src={img2} alt="" id='home' />
        )
    }
    else if (heroCount===2) {
        return(
            <img className='background fade-in' src={img3} alt="" id='home' />
        )
    }
}

export default Background
