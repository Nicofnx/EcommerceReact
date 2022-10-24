
import './App.css';

import NavBar from './components/NavBar';
import Header from './components/Header';
import ListOfCards from './components/ListOfCards'



function App() {

  

  
  
  return (
    <div className="App">
      <Header />      
      <NavBar />
      <ListOfCards
         greeting = 'Hola soy un saludo pasado como props' 
      />
      
    </div>
  );
}

export default App;
