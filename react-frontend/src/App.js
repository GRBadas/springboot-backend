import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
    <Router>
      <div className="container">
        <HeaderComponent />
        <div className="container">
            <Routes>
              <Route path='/' element ={<ListEmployeeComponent />} />
              <Route path='/employees' element ={<ListEmployeeComponent />} />
            </Routes> 
        </div>
        <FooterComponent />
      </div>
    </Router>
  </div>
  );
}

export default App;
