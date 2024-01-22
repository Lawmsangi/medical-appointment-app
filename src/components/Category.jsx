import React from 'react'
import '../styles/Category.css'
import Cardiology from '../assests/cardiology.png'
import Dermatology from '../assests/dermatology.png'
import Ortho from '../assests/orthopedics.jpg'
import Dental from '../assests/dental.png'
import Pediatrics from '../assests/pediatrics.png'
import Mental from '../assests/mental.png'

function Category() {
  return (
    <div className='categories'>
      <h1>Categories</h1>
      <div className="categories-lists">
        <div className="category">
          <div className="category-icon">
            <img src={Cardiology} alt="cardiology" />
            <h5>Cardiology</h5>
          </div>
          <p>Explore information and resources related to heart health, cardiovascular diseases, and preventive measures. Stay informed about the latest advancements in cardiology.
            <a href='https://www.news-medical.net/health/Cardiology-What-is-Cardiology.aspx#:~:text=The%20term%20cardiology%20is%20derived,as%20coronary%20artery%20disease%20and' className='category-link'>Read more</a>
          </p>
        </div>
        <div className="category">
          <div className="category-icon">
            <img src={Dermatology} alt="dermatology" />
            <h5>Dermatology</h5>
          </div>
          <p>Dive into skincare tips, common skin conditions, and treatment options. Learn about maintaining healthy skin and managing dermatological concerns effectively.
            <a href="https://www.news-medical.net/health/What-is-Dermatology.aspx#:~:text=Dermatology%20involves%20the%20study%2C%20research,in%20this%20area%20of%20healthcare." className='category-link'>Read more</a>
          </p>
        </div>
       <div className="category">
          <div className="category-icon">
            <img src={Ortho} alt="ortho" />
            <h5>Orthopedics</h5>
          </div>
          <p>Discover insights into bone and joint health, orthopedic conditions, and rehabilitation techniques. Access expert advice on managing musculoskeletal issues.
            <a href="https://www.britannica.com/science/orthopedics" className='category-link'>Read more</a>
          </p>
        </div>
        <div className="category">
          <div className="category-icon">
            <img src={Dental} alt="dental" />
            <h5>Dental</h5>
          </div>
          <p>Explore essential information on oral health, dental procedures, and preventive care. From brushing techniques to common dental treatments, stay informed for a healthier smile.
            <a href="https://en.wikipedia.org/wiki/Dentistry" className='category-link'>Read more</a>
          </p>
        </div>
        <div className="category">
          <div className="category-icon">
            <img src={Pediatrics} alt="pediatrics" />
            <h5>Pediatrics</h5>
          </div>
          <p>Get information on pediatric care, child development, vaccinations, and common childhood illnesses. Access resources for parents to ensure the well-being of their children.
            <a href="https://en.wikipedia.org/wiki/Pediatrics#:~:text=Pediatrics%20(also%20spelled%20paediatrics%20or,%2C%20adolescents%2C%20and%20young%20adults." className='category-link'>Read more</a>
          </p>
        </div>
        <div className="category">
          <div className="category-icon">
            <img src={Mental} alt="mental" />
            <h5>Mental</h5>
          </div>
          <p>Focus on mental well-being with resources on stress management, anxiety, depression, and overall mental health support. Find strategies for maintaining a healthy mind.
            <a href="https://www.samhsa.gov/mental-health" className='category-link'>Read more</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Category