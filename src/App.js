import Home from './components/Home'
import SeachPage from './components/SearchPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/search' element={<SeachPage/>}/>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
