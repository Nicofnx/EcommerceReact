
import './App.css';
import DetailsPages from './components/Pages/DetailsPages'
import NavBar from './components/NavBar';
import Header from './components/Header';
import ListOfCards from './components/Pages/ListOfCards';

import CheckOut from './components/Pages/CheckOut';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";



function App() {

  

  
  
  return (
    <div className="App">
      <Router>
        <header>
          <Header />      
          <NavBar />  
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ListOfCards/>}>
            Lista de productos
            </Route>
            <Route path="/checkout-page" element={<CheckOut/>}>
            Carrito de compras
            </Route>
            <Route exact path="/detailspage/:detailsId" element={<DetailsPages />} />
          </Routes>
        </main>
        <footer>

        </footer>
      </Router>
    </div>
  );
}

export default App;
