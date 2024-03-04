import './App.css';
import CounterComponent from './components/CounterComponent.jsx';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Productos a la venta" />
      {/*       <CounterComponent /> */}
    </>
  );
}

export default App;
