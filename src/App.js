import './App.css';
import Routers from './routers/Routers'
import Header from './components/Header'
import Footer from './components/Footer';

import Slideshow from './components/Slideshow';

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



{/* <ul>
{cart.map(({ name, price, amount }, index) => (
    <div key={`${name}-${index}`}>
            {name} {price}€ x {amount}
    </div>
))}
</ul> */}