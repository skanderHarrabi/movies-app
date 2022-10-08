import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Header from './components/Header';
import './globalStyle.scss';

function App() {
  return (
  <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:movieId' element={<Movie/>}/>
    </Routes>
  </Router>
  );
}

export default App;
