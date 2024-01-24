import React,{useEffect, useState} from 'react'
import doctor1 from '../assests/doctor-1.jpg'
import doctor2 from '../assests/doctor-2.jpg'
import doctor3 from '../assests/doctor-3.jpg'
import doctor4 from '../assests/doctor-4.jpg'
import doctor5 from '../assests/doctor-5.jpg'
import '../styles/Home.css'
import { MdNavigateNext } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Home() {
  const doctors =[
    {name:'Dr. Peter Khan',speciality:'Brain Surgeon',image:doctor1, biography:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur incidunt ratione vero accusantium illum porro maxime sunt inventore, ducimus doloremque?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae minus nihil voluptatem impedit dolorum amet similique minima cupiditate consequatur quod.'},
    {name:'Dr. Peter Khan',speciality:'Brain Surgeon',image:doctor2, biography:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur incidunt ratione vero accusantium illum porro maxime sunt inventore, ducimus doloremque?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae minus nihil voluptatem impedit dolorum amet similique minima cupiditate consequatur quod.'},
    {name:'Dr. Peter Khan',speciality:'Brain Surgeon',image:doctor3, biography:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur incidunt ratione vero accusantium illum porro maxime sunt inventore, ducimus doloremque?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae minus nihil voluptatem impedit dolorum amet similique minima cupiditate consequatur quod.'},
    {name:'Dr. Peter Khan',speciality:'Brain Surgeon',image:doctor4, biography:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur incidunt ratione vero accusantium illum porro maxime sunt inventore, ducimus doloremque?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae minus nihil voluptatem impedit dolorum amet similique minima cupiditate consequatur quod.'},
    {name:'Dr. Peter Khan',speciality:'Brain Surgeon',image:doctor5, biography:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur incidunt ratione vero accusantium illum porro maxime sunt inventore, ducimus doloremque?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae minus nihil voluptatem impedit dolorum amet similique minima cupiditate consequatur quod.'}
  ];

const doctorsPerPage = calculateDoctorsPerPage();
const [currentPage, setCurrentPage] = useState(0);

const handleNextClick = () => {
    const nextPage = currentPage + 1;
    const totalPages = Math.ceil(doctors.length / doctorsPerPage);

    if (nextPage < totalPages) {
        setCurrentPage(nextPage);
    } else {
        setCurrentPage(0);
    }
};

useEffect(() => {
    function handleResize() {
        setCurrentPage(0);
    }

    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);

function calculateDoctorsPerPage() {
    const windowWidth = window.innerWidth;
     if (windowWidth < 600) {
          return 1;
        } else if (windowWidth < 900) {
          return 2;
        } else {
          return 3;
        }
}
  const navigate = useNavigate();
  const handleAppointmentClick = (doctor) => {
    navigate('/makeappointment',{ state: { doctor } }); 
  };

  return (
    <div className='home'>
        <h1>Find Your Specialist Doctor</h1>
        <p>Book an appointment with a doctor near you.</p>
        <div className="doctors-card">
           {doctors.slice(currentPage * doctorsPerPage, (currentPage + 1) * doctorsPerPage).map((doctor, index) => (
            <div className="doctor-card" key={index}  onClick={() => handleAppointmentClick(doctor)}>
                <img src={doctor.image} alt="image" />
                <div className="doctor-info">
                  <h3>{doctor.name}</h3>
                  <p>{doctor.speciality}</p>
                </div>
                
            </div>
            ))}
            <MdNavigateNext className="next-icon" onClick={handleNextClick} />
        </div>
            
    </div>
  )
}

export default Home