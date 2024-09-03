import './App.css';
import Checkout from './Checkout/Checkout';
import Header from './Header/Header';
import Home from './Home/Home';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
