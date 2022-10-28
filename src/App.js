
import './App.css';

import NavBar from './components/NavBar';
import Header from './components/Header';
import ListOfCards from './components/ListOfCards'
import Modal from './components/Modal';
import CheckOut from './components/CheckOut';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  

  
  
  return (
    <div className="App">
      <Router>
        <Header />      
        <NavBar />      
        
        <Routes>
          <Route path="/" element={<ListOfCards/>}>
          Lista de productos
          </Route>
          <Route path="/checkout-page" element={<CheckOut/>}>
          Carrito de compras
          </Route>
        </Routes>
      </Router>
      
        
        
    
        

      
      
      {/* <Modal /> */}
      
      
    </div>
  );
}

export default App;
