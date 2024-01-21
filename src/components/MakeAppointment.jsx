import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/MakeAppointment.css';
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

function MakeAppointment(props) {
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

  if (!doctor) {
    return (
      <div>
        <h1>MakeAppointment</h1>
        <p>No doctor information available.</p>
      </div>
    );
  }

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
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur incidunt ratione vero accusantium illum porro maxime sunt inventore, ducimus doloremque?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae minus nihil voluptatem impedit dolorum amet similique minima cupiditate consequatur quod.</p>
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
      <button className='book-btn'>Book An Appointment</button>
    </div>
  );
}

export default MakeAppointment;
