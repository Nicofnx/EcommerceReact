
import './App.css';
import DetailsPages from './Pages/DetailsPages'
import NavBar from './components/NavBar';
import Header from './components/Header';
import ListOfCards from './Pages/ListOfCards';

import CheckOut from './Pages/CheckOut';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import ListFavorites from './components/ListFavorites';



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
          <ListFavorites />
        </main>
        <footer>

        </footer>
      </Router>
    </div>
  );
}

export default App;
