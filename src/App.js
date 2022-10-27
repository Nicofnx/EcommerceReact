
import './App.css';

import NavBar from './components/NavBar';
import Header from './components/Header';
import ListOfCards from './components/ListOfCards'
import Modal from './components/Modal';
import CheckOut from './components/CheckOut';



function App() {

  

  
  
  return (
    <div className="App">
      <Header />      
      <NavBar />
      {/* <ListOfCards
         greeting = 'Hola soy un saludo pasado como props' 
      />
      <Modal /> */}
      <CheckOut />
      
    </div>
  );
}

export default App;
