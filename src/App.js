
import './App.css';
import 'bootstrap';
import Signform from './components/Signform';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import ErrorPage from './components/ErrorPage';
import Signupform from './components/Signupform';
import Gobackpage from './components/Gobackpage';
import Loguser from './components/Loguser';
function App() {
  return (
    <div>
    <div className='App App-header'>
      <Router>
      <div className='container'>
        <Routes>
            <Route path='/' element={<Signform/>}></Route>
            <Route path='/error' element={<ErrorPage/>}></Route>
            <Route path='/signup' element={<Signupform/>}></Route>
            <Route path='/goback' element={<Gobackpage/>}></Route>
            <Route path='/log' element={<Loguser/>}></Route>
         </Routes>
      </div>
      </Router>
    </div>
    </div>
  );
}

export default App;
