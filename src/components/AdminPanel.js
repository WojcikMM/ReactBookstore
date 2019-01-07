import React from "react";
import { fbase,firebaseApp } from '../fbase';

class AdminPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      books:[],
      book: {
        name: "",
        author: "",
        description: "",
        onStock: false,
        image:""
      },
      loggedIn: false,
      email: "",
      password: ""
    };
  }


  handleLoginChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleChange = (event)  => {


    this.setState({
      book: {
        ...this.state.book,
        [event.target.name]: event.target.name === "onStock" ? event.target.checked : event.target.value
      }
    });
  }

  authenticate = (event) => {
    event.preventDefault();

    firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setState({
          loggedIn: true
        });
        localStorage.setItem("loggedIn", true);
      }).catch((err) => {
        console.log('Unable to authenicate.',err);
    })
  }

  addNewBook = (event) => {

    event.preventDefault();
    let newBook = { ...this.state.book };
    
    if (Array.isArray(this.state.books)) {
      this.setState({books: [...this.state.books, newBook] });
    } else {
      this.setState({ books: [newBook] });
    }

    this.setState({
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

    if (localStorage.getItem("loggedIn")) {
      this.setState({
        loggedIn: localStorage.getItem("loggedIn")
      });
    }

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
      <div>
        {!this.state.loggedIn && 
          <div>
          <form onSubmit={this.authenticate}>
            <input type="text" placeholder="Email" id="email" name="email" className="form-control"
              onChange={this.handleLoginChange} value={this.state.email} />
            
            <input type="password" placeholder="Password" id="password" name="password" className="form-control"
              onChange={this.handleLoginChange} value={this.state.password} />
            
            <button type="submit" className="btn btn-primary">Log In</button>
          </form>
          </div>
        }



        {this.state.loggedIn &&
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
        }
    </div>
    );
  }
}

export default AdminPanel;
