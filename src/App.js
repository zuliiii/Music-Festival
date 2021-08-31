import { BrowserRouter, Route } from 'react-router-dom';

import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import AboutDj from './components/AboutDj'
import { CartProvider } from "react-use-cart";
import AddToCart from './components/carts/AddToCart';


import './sass/style.css';

function App() {

return (
    <div className="app">
      <CartProvider >
          <BrowserRouter>
          <Navbar/>
          <Route exact path="/" component={Home}></Route>
    <Route path="/Footer" component={Footer}></Route>
    <Route path="/Contact" component={ContactUs}></Route>
    <Route path="/AddToCart" component={AddToCart}></Route>
    {/* <Route path="/AboutDj" component={AboutDj}></Route> */}

  </BrowserRouter>
  </CartProvider>

    </div> 
  );
}

export default App;




