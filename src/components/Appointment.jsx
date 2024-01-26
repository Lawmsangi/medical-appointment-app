import React from 'react';
import '../styles/Appointment.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeAppointment } from '../redux/appointmentsSlice'
import { Link } from 'react-router-dom';

function Appointment() {
  const appointments = useSelector((store) => store.appointmentsStore.appointments)
  const dispatch = useDispatch()

  return (
    <div className='appointment-container'>
      <div className="appointment-header">
        <h1>My Appointments</h1>
        <p>Here are all the appointments you have made.</p>
      </div>
      <div className="appointment-content">
        {appointments.length === 0 ? (
          <div className='no-appointments'>
            <p>No appointments</p>
            <div className="view-bookings">
             <Link to="/" className='font-white'>Book Appointment Now</Link>
            </div>
         </div>
        ) : (
          appointments.map((appointment) => (
            <div key={appointment.id} className='appointment-card'>
              <img src={appointment.image} alt="image" />
              <p className='bg-gray'><span className="label">Name</span><span className="value">{appointment.doctor}</span></p>
              <p><span className="label">Date</span><span className="value">{appointment.date}</span></p>
              <p className='bg-gray'><span className="label">Time</span><span className="value">{appointment.time}</span></p>
              <p><span className="label">Speciality</span> <span className="value">{appointment.speciality}</span></p>
              <button
              className='cancel-btn'
              onClick={() => dispatch(removeAppointment(appointment.id))}>
                Cancel
              </button>
            </div>
          ))
        )}
      </div>
      
    </div>
  )
}

export default Appointment