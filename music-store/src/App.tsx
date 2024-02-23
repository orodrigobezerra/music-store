import './App.css';
import { Route, Routes } from 'react-router-dom';
import { SoonPage, Home } from './pages';
import { Layout } from './components';

function App() {
  return (
    <Routes>
      <Route path="/" element= { <Layout /> }>
        <Route index element={ <SoonPage /> } />
        <Route path="home" element={ <Home /> } />
      </Route>
    </Routes>
  )
}

export default App
