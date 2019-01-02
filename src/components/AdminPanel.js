import React from "react";
import { fbase } from '../fbase';

class AdminPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      book: {
        name: "",
        author: "",
        description: "",
        onStock: false,
        image:""
      }
    };
  }

  handleChange = (event)  => {


    this.setState({
      books: [],
      book: {
        ...this.state.book,
        [event.target.name]: event.target.name === "onStock" ? event.target.checked : event.target.value
      }
    });
  }

  addNewBook = (event) => {

    event.preventDefault();
    let newBook = { ...this.state.book };
  

    this.setState({
      books: [...this.state.books,newBook],
      book: {
        name: "",
        author: "",
        description: "",
        onStock: false,
        image:""
      }
    })
  }

  componentDidMount() {
    this.ref=fbase.syncState('bookstore/books', {
      context: this,
      state: 'books'
    });
  }

  componentWillUnmount() {
    fbase.removeBinding(this.ref);
  }


  render() {
    return (
      <div className="admin-panel col-xs-4">
        <form onSubmit={this.addNewBook}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Book name"
              id="name"
              name="name"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.book.name}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Book author"
              id="author"
              name="author"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.book.author}
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Book description"
              id="description"
              name="description"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.book.description}
            />
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              id="onStock"
              name="onStock"
              className="form-check-input"
              onChange={this.handleChange}
              checked={this.state.book.onStock}
            />
            <label htmlFor="onStock" className="form-check-label">
              On stock
            </label>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Book image"
              id="image"
              name="image"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.book.image}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AdminPanel;
