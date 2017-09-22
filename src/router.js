import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from './components/landing/Header';
import ShelfA from './components/landing/ShelfA';
import Bin1 from './components/bins/Bin1';


export default (
    <Switch>
      <Route component={ Header } exact path="/"  />
      <Route component={ ShelfA } path="/Shelf" /> 
      <Route component={ Bin1 } path="/bins/:shelf" />
    </Switch>
)