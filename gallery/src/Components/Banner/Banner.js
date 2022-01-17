import React from 'react'
import { Link ,useNavigate } from 'react-router-dom'


import '../Banner/Banner.css'
function Banner() {
    const navigate = useNavigate();
    
    return (
        <div className='banner'>
            <div className="bannerContent">
                <h1>My Favorite Cars & Bikes</h1>
                <button onClick={()=>{
                    navigate('/add')
                }} className='button'>Add to Colletion</button>

                
            </div>
        </div>
    )
}

export default Banner
