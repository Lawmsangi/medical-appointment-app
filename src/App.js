import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import Appointment from './components/Appointment';
import MakeAppointment from './components/MakeAppointment';
import Category from './components/Category';
import ThankYou from './components/ThankYou';
import Login from './components/Login';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/category" element={<Layout><Category /></Layout>} />
        <Route path="/appointment" element={<Layout><Appointment /></Layout>} />
        <Route path="/makeappointment" element={<Layout><MakeAppointment /></Layout>} />
        <Route path="/thankyou" element={<Layout><ThankYou/></Layout>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
