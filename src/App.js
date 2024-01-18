import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
      </Routes>
    </div>
  );
}

export default App;
