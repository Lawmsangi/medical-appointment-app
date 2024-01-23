import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeAppointment } from '../redux/appointmentsSlice'

function Appointment() {
  const appointments = useSelector((store) => store.appointmentsStore.appointments)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Appointment</h1>
      {appointments.length === 0 ? (
        <p>No appointments</p>
      ) : (
        appointments.map((appointment) => (
          <div key={appointment.id}>
            <img src={appointment.image} alt="image" />
            <h3>{appointment.doctor}</h3>
            <p>{appointment.date}</p>
            <p>{appointment.time}</p>
            <button onClick={() => dispatch(removeAppointment(appointment.id))}>
              Cancel
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default Appointment