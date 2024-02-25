import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home,  ArticlesList } from './pages';
import { Layout } from './components';

function App() {
  return (
    <Routes>
      <Route path="/" element= { <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="articles-list" element={ <ArticlesList /> } />
      </Route>
    </Routes>
  )
}

export default App
