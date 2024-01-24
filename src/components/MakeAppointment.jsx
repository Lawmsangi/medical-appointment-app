import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/MakeAppointment.css';
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import { useDispatch } from 'react-redux';
import { addAppointment } from '../redux/appointmentsSlice';

function MakeAppointment() {
  const location = useLocation();
  const { state } = location;
  const doctor = state ? state.doctor : null;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('00:00');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

   const handleBookAppointment = () => {
    const newAppointment = {
      id: Math.floor(Math.random() * 1000) + 1,
      doctor: doctor.name,
      image: doctor.image,
      date: JSON.stringify(selectedDate),
      time: selectedTime,
      speciality: doctor.speciality,
    };

    // Dispatch action to add the appointment
    dispatch(addAppointment(newAppointment));

    // Redirect to the congratulations page
    navigate('/thankyou');
  };

  return (
    <div className='make-appointment'>
      <h1>MakeAppointment</h1>
      <div className="appointment-doctor">
        <img src={doctor.image} alt="image" />
        <div className="info-icons">
          <div className="doctor-info">
            <h3>{doctor.name}</h3>
            <p>{doctor.speciality}</p>
          </div>
          <div className="appointment-icons">
            <IoCall className='call-icon'/>
            <MdEmail className='email-icon'/>
          </div>
        </div>
      </div>
      <div className="biography">
        <h4>Biography</h4>
        <p>{doctor.biography}</p>
      </div>

      <div className="schedules">
        <h4>Schedules</h4>
         <div className='schedules-date'>
          <label>Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            minDate={new Date()} 
            className='date-picker'
          />
         </div>
          <div className='schedules-time'>
            <label>Time:</label>
            <TimePicker
              value={selectedTime}
              onChange={handleTimeChange}
              className='time-picker'
            />
          </div>
        </div>
      <button className='book-btn' onClick={handleBookAppointment}>
        Book An Appointment
      </button>
    </div>
  );
}

export default MakeAppointment;
