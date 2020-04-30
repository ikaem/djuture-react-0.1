import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/layout.component';
import Home from "./pages/home.page";
import Profile from './pages/profile.page';
import Product from './pages/product.page';
import LoginRegister from './pages/login-register.page';
import Cart from './pages/cart.page';
import Enquiry from './pages/enquiry.page';

function App() {
  return (
  <Layout>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/profile">
        <Profile/>
      </Route>
      <Route path="/product/:productId">
        <Product/>
      </Route>
      <Route path="/login">
        <LoginRegister/>
      </Route>
      <Route path="/register">
        <LoginRegister/>
      </Route>
      <Route path="/cart">
        <Cart/>
      </Route>
      <Route path="/enquiry">
        <Enquiry/>
      </Route>
      <Route><h1>Unfortunately, a 404...</h1></Route>

    </Switch>
  </Layout>
  );
}

export default App;
