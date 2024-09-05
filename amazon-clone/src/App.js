import './App.css';
import Checkout from './Checkout/Checkout';
import Header from './Header/Header';
import Home from './Home/Home';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './Login/Login';


function App() {
  return (
    <Router>
      <div className='App'>
        
        <Routes>
          <Route path='/checkout' element={
    <>
        <Header />
        <Checkout />
    </>} /> 
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<><Header/> <Home /></>} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
