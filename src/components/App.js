import React, { Component } from "react";
import Order from "./Order";
import Header from "./Header";
import Inventory from "./Inventory";

import "../index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      order:[]
    };
  }

  addToOrder = (book) => {
    this.setState({
      order: [...this.state.order,book]
    })
  }

  removeFromOrder = (bookTitle) => {
    this.setState({
      order: this.state.order.filter(book => book.name !== bookTitle)
    })
  }


  render() {
    return (
      <div className=" container">
        <div className="row">
          <Header />
        </div>
        <div className="app row">
          <Order orders={this.state.order} removeFromOrders={this.removeFromOrder} />
          <Inventory books={this.state.books} addToOrder={this.addToOrder} removeFromOrder={this.removeFromOrder} />
        </div>
      </div>
    );
  }
}

export default App;
