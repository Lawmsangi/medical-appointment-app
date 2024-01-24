import React from 'react'
import { Link } from 'react-router-dom';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import '../styles/ThankYou.css';

function ThankYou() {
  const { width, height } = useWindowSize();
  
  return (
      <div className="thankyou-container">
        <div className="thankyou-content">
            <h1>Thank You!</h1>
            <p>Your appointment has been successfully booked.🥳🎉🎊</p>
        </div>
       <Confetti
        width={width}
        height={height}
        />

        <div className="view-bookings">
            <Link to="/appointment" className='font-white'>View Booking</Link>
        </div>
    </div>
  )
}

export default ThankYou