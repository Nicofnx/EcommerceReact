
import './App.css';
import ItemsCount from './components/ItemsCount';
import NavBar from './components/NavBar';
import Header from './components/Header';
import ListOfCards from './components/ListOfCards'



function App() {

  

  
  
  return (
    <div className="App">
      <Header />      
      <NavBar />
      <ListOfCards></ListOfCards>
      <ItemsCount
        stock = {5}
        initial = {1}
      />
    </div>
  );
}

export default App;
