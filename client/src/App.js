import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Register from './pages/Register/register';
import Shop from './pages/Shop/shop'
import Cart from './pages/Cart/cart'
import Hats from './pages/Hats/hats'
import Shirts from './pages/Shirts/shirts'
import Hoodies from './pages/Hoodies/hoodies'
import Shoes from './pages/Shoes/shoes'
import Creators from './pages/Creators/creators'
import State from './pages/State/state'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/creators" component={Creators} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shop/hats" component={Hats} />
        <Route exact path="/shop/shirts" component={Shirts} />
        <Route exact path="/shop/hoodies" component={Hoodies} />
        <Route exact path="/shop/shoes" component={Shoes} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/state" component={State} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;

