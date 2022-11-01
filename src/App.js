
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
import { DataProvider } from './context/DataContext'


function App() {

  

  
  
  return (
    <div className="App">
      <Router>
        <DataProvider>
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
         
        </DataProvider>
        
      </Router>
      
        
        
    
        

      
      
     
      
      
    </div>
  );
}

export default App;
