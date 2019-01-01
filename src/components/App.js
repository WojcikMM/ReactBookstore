import React, { Component } from "react";
import AdminPanel from "./AdminPanel";
import Order from "./Order";
import Header from "./Header";
import Inventory from "./Inventory";

import "../index.css";

class App extends Component {
  render() {
    return (
      <div className=" container">
        <Header />
        <div className="app 
        
        row">
          <Order />
          <Inventory />
          <AdminPanel />
        </div>
      </div>
    );
  }
}

export default App;
