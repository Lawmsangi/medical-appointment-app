import React,{useEffect, useState} from 'react'
import doctor1 from '../assests/doctor-1.jpg'
import doctor2 from '../assests/doctor-2.jpg'
import doctor3 from '../assests/doctor-3.jpg'
import doctor4 from '../assests/doctor-4.jpg'
import doctor5 from '../assests/doctor-5.jpg'
import doctor6 from '../assests/doctor-6.jpg'
import doctor7 from '../assests/doctor-7.jpg'
import doctor8 from '../assests/doctor-8.jpg'
import doctor9 from '../assests/doctor-9.jpg'
import doctor10 from '../assests/doctor-10.jpg'
import doctor11 from '../assests/doctor-11.jpg'
import doctor12 from '../assests/doctor-12.jpg'
import doctor13 from '../assests/doctor-13.jpg'
import '../styles/Home.css'
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Home() {
  const doctors =[
    {name:'Dr. Peter Khan',speciality:' Cardiologist',image:doctor1, biography:"Dr. Peter Khan is a distinguished cardiologist renowned for his expertise in cardiac care. Born and raised in Bangalore, he embarked on his medical journey with a fervent passion for cardiovascular health. After completing his medical education at Bangalore Medical College, Dr. Khan pursued specialized training in cardiology at a prestigious hospital in Mumbai. With a commitment to excellence and a compassionate approach to patient care, he has dedicated his career to diagnosing and treating heart conditions, striving to improve the lives of his patients through innovative cardiac interventions and preventive measures. Dr. Khan's unwavering dedication to the field of cardiology has earned him recognition as a leader in his field, and he continues to inspire his colleagues and patients alike with his expertise and compassion."},
    {name:'Dr. Pooja Singh',speciality:'Neurologist',image:doctor2, biography:"Dr. Pooja Singh is a highly esteemed neurologist known for her dedication to advancing neurological care. Raised in New Delhi, her fascination with the complexities of the brain led her to pursue a career in medicine. After completing her medical education at Delhi Medical College, Dr. Singh pursued specialized training in neurology at a renowned institute in Mumbai. With a deep commitment to understanding and treating neurological disorders, she has devoted her career to providing compassionate care to patients with conditions affecting the nervous system. Dr. Singh's expertise, combined with her empathy and unwavering commitment to her patients, has earned her widespread respect in the field of neurology."},
    {name:'Dr. Sarah Nguyen',speciality:'Oncologist',image:doctor3, biography:"Dr. Sarah Nguyen is a highly respected oncologist known for her expertise in cancer care. Born and raised in New Delhi, she embarked on her medical journey with a fervent passion for oncology. After completing her medical education at Delhi Medical College, Dr. Nguyen pursued specialized training in oncology at a prestigious hospital in Mumbai. With a commitment to excellence and a compassionate approach to patient care, she has dedicated her career to diagnosing and treating cancer, striving to improve the lives of her patients through innovative cancer treatments and preventive measures. Dr. Nguyen's unwavering dedication to the field of oncology has earned her recognition as a leader in her field, and she continues to inspire her colleagues and patients alike with her expertise and compassion."},
    {name:'Dr. Aisha Desai',speciality:'Gastroenterologist',image:doctor4, biography:"Dr. Aisha Desai is a highly esteemed gastroenterologist known for her dedication to advancing gastrointestinal care. Raised in New Delhi, her fascination with the complexities of the digestive system led her to pursue a career in medicine. After completing her medical education at Delhi Medical College, Dr. Desai pursued specialized training in gastroenterology at a renowned institute in Mumbai. With a deep commitment to understanding and treating gastrointestinal disorders, she has devoted her career to providing compassionate care to patients with conditions affecting the digestive system. Dr. Desai's expertise, combined with her empathy and unwavering commitment to her patients, has earned her widespread respect in the field of gastroenterology."},
    {name:'Dr. Priya Sharma',speciality:'Pediatrician',image:doctor5, biography:"Dr. Priya Sharma is a highly respected pediatrician known for her expertise in pediatric care. Born and raised in New Delhi, she embarked on her medical journey with a fervent passion for pediatric health. After completing her medical education at Delhi Medical College, Dr. Sharma pursued specialized training in pediatrics at a prestigious hospital in Mumbai. With a commitment to excellence and a compassionate approach to patient care, she has dedicated her career to diagnosing and treating pediatric conditions, striving to improve the lives of her patients through innovative pediatric interventions and preventive measures. Dr. Sharma's unwavering dedication to the field of pediatrics has earned her recognition as a leader in her field, and she continues to inspire her colleagues and patients alike with her expertise and compassion."},
    {name:'Dr. Samantha Chen',speciality:'Ophthalmologist',image:doctor6, biography:"Dr. Samantha Chen is a highly esteemed ophthalmologist known for her dedication to advancing eye care. Raised in New Delhi, her fascination with the complexities of the eye led her to pursue a career in medicine. After completing her medical education at Delhi Medical College, Dr. Chen pursued specialized training in ophthalmology at a renowned institute in Mumbai. With a deep commitment to understanding and treating eye disorders, she has devoted her career to providing compassionate care to patients with conditions affecting the eyes. Dr. Chen's expertise, combined with her empathy and unwavering commitment to her patients, has earned her widespread respect in the field of ophthalmology."},
    {name:'Dr. Michelle Patel',speciality:'Dermatologist',image:doctor7, biography:"Dr. Michelle Patel is a highly respected dermatologist known for her expertise in skin care. Born and raised in New Delhi, she embarked on her medical journey with a fervent passion for dermatology. After completing her medical education at Delhi Medical College, Dr. Patel pursued specialized training in dermatology at a prestigious hospital in Mumbai. With a commitment to excellence and a compassionate approach to patient care, she has dedicated her career to diagnosing and treating skin conditions, striving to improve the lives of her patients through innovative dermatological interventions and preventive measures. Dr. Patel's unwavering dedication to the field of dermatology has earned her recognition as a leader in her field, and she continues to inspire her colleagues and patients alike with her expertise and compassion."},
    {name:'Dr. John Smith',speciality:'Psychiatrist',image:doctor8, biography:"Dr. John Smith is a highly esteemed psychiatrist known for his dedication to advancing mental health care. Raised in New Delhi, his fascination with the complexities of the mind led him to pursue a career in medicine. After completing his medical education at Delhi Medical College, Dr. Smith pursued specialized training in psychiatry at a renowned institute in Mumbai. With a deep commitment to understanding and treating mental health disorders, he has devoted his career to providing compassionate care to patients with conditions affecting the mind. Dr. Smith's expertise, combined with his empathy and unwavering commitment to his patients, has earned him widespread respect in the field of psychiatry."},
    {name:'Dr. Jonathan Smith',speciality:'  Orthopedic Surgeon',image:doctor9, biography:"Dr. Jonathan Smith is a distinguished orthopedic surgeon renowned for his expertise in orthopedic care. Born and raised in New Delhi, he embarked on his medical journey with a fervent passion for orthopedics. After completing his medical education at Delhi Medical College, Dr. Smith pursued specialized training in orthopedics at a prestigious hospital in Mumbai. With a commitment to excellence and a compassionate approach to patient care, he has dedicated his career to diagnosing and treating orthopedic conditions, striving to improve the lives of his patients through innovative orthopedic interventions and preventive measures. Dr. Smith's unwavering dedication to the field of orthopedics has earned him recognition as a leader in his field, and he continues to inspire his colleagues and patients alike with his expertise and compassion."},
    {name:'Dr. Michael Johnson',speciality:'Neurologist',image:doctor10, biography:"Dr. Michael Johnson is a highly respected neurologist known for his expertise in neurological care. Born and raised in New Delhi, he embarked on his medical journey with a fervent passion for the complexities of the brain. After completing his medical education at Delhi Medical College, Dr. Johnson pursued specialized training in neurology at a prestigious hospital in Mumbai. With a commitment to excellence and a compassionate approach to patient care, he has dedicated his career to diagnosing and treating neurological conditions, striving to improve the lives of his patients through innovative neurological interventions and preventive measures. Dr. Johnson's unwavering dedication to the field of neurology has earned him recognition as a leader in his field, and he continues to inspire his colleagues and patients alike with his expertise and compassion."},
    {name:'Dr. Emily Rodriguez',speciality:'Oncologist',image:doctor11, biography:"Dr. Emily Rodriguez is a highly esteemed oncologist known for her dedication to advancing cancer care. Raised in New Delhi, her fascination with the complexities of cancer led her to pursue a career in medicine. After completing her medical education at Delhi Medical College, Dr. Rodriguez pursued specialized training in oncology at a renowned institute in Mumbai. With a deep commitment to understanding and treating cancer, she has devoted her career to providing compassionate care to patients with conditions affecting the nervous system. Dr. Rodriguez's expertise, combined with her empathy and unwavering commitment to her patients, has earned her widespread respect in the field of oncology."},
    {name:'Dr. David Thompson',speciality:'Brain Sergeon',image:doctor12, biography:"Dr. David Thompson is a highly respected brain surgeon known for his expertise in brain surgery. Born and raised in New Delhi, he embarked on his medical journey with a fervent passion for the complexities of the brain. After completing his medical education at Delhi Medical College, Dr. Thompson pursued specialized training in brain surgery at a prestigious hospital in Mumbai. With a commitment to excellence and a compassionate approach to patient care, he has dedicated his career to diagnosing and treating brain conditions, striving to improve the lives of his patients through innovative brain interventions and preventive measures. Dr. Thompson's unwavering dedication to the field of brain surgery has earned him recognition as a leader in his field, and he continues to inspire his colleagues and patients alike with his expertise and compassion."},
    {name:'Dr. Kavita Reddy',speciality:' Psychiatrist',image:doctor13, biography:"Dr. Kavita Reddy is a distinguished psychiatrist renowned for her expertise in mental health care. Born and raised in New Delhi, she embarked on her medical journey with a fervent passion for mental health. After completing her medical education at Delhi Medical College, Dr. Reddy pursued specialized training in psychiatry at a prestigious hospital in Mumbai. With a commitment to excellence and a compassionate approach to patient care, she has dedicated her career to diagnosing and treating mental health conditions, striving to improve the lives of her patients through innovative psychiatric interventions and preventive measures. Dr. Reddy's unwavering dedication to the field of psychiatry has earned her recognition as a leader in her field, and she continues to inspire her colleagues and patients alike with her expertise and compassion."}
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

 const handleBackClick = () => {
    const prevPage = currentPage - 1;
    const totalPages = Math.ceil(doctors.length / doctorsPerPage);

    if (prevPage >= 0) {
      setCurrentPage(prevPage);
    } else {
      setCurrentPage(totalPages - 1);
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
          <MdNavigateBefore className="next-icon" onClick={handleBackClick} />
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