import React, { Component } from "react";
import AdminPanel from "./AdminPanel";
import Order from "./Order";
import Header from "./Header";
import Inventory from "./Inventory";

import "../index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  addNewBook = book => {
    let newBooks = [...this.state.books];
    console.log(newBooks);
    newBooks.push(book);
    this.setState({
      books: newBooks
    });
  };

  render() {
    return (
      <div className=" container">
        <div className="row">
          <Header />
        </div>
        <div className="app row">
          <Order />
          <Inventory books={this.state.books} />
          <AdminPanel books={this.state.books} addBook={this.addNewBook} />
        </div>
      </div>
    );
  }
}

export default App;
