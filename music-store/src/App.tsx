import './App.css';
import { Route, Routes } from 'react-router-dom';
import { SoonPage, Home } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element= { <SoonPage /> } />
      <Route path="/home" element= { <Home /> } />
    </Routes>
  )
}

export default App
