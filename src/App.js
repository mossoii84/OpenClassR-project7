import './App.css';
import Routers from './routers/Routers'
import Header from './components/Header'
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routers></Routers>
      <Footer></Footer>
    </div>
  );
}

export default App;
