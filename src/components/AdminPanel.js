import React from 'react';
import LoginPanel from './LoginPanel';
import AddBookForm from './AddBookForm';
import AdminBookListing from './AdminBookListing'
import {fbase, firebaseApp} from '../fbase';

class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            loggedIn : false
        };
    };

    changeLoggedIn = (newValue) => {

        this.setState({ loggedIn: newValue });
        localStorage.setItem("loggedIn", newValue);
    }

    loggOut = () => {
        firebaseApp.auth().signOut().then(() => this.changeLoggedIn(false));
    }

    addNewBook = (book) => this.setState({
        books : [...this.state.books, book],
    })

    componentDidMount() {
        if (localStorage.getItem("loggedIn")) {
            this.setState({
              loggedIn: localStorage.getItem("loggedIn")
            });
        }
        
        this.ref = fbase.syncState('bookstore/books', {
            context: this,
            state: 'books'
        });

      

    }

    componentWillUnmount() {
       fbase.removeBinding(this.ref);
    }

    removeFromInventory = (title) => {
        this.setState({
            books : this.state.books.filter( book => title!==book.name )
        })
    }

    editBook = (oldBookTitle,bookAfterEdit) => {
        
        const newBooks = this.state.books.filter( book => oldBookTitle!==book.name );

        this.setState({
            books : [...newBooks, bookAfterEdit],
        })
    }
    render() {

        return (
            <div>
                {!this.state.loggedIn &&
                    <LoginPanel changeLoggedIn={this.changeLoggedIn}/>
                }
                {this.state.loggedIn && 
                    <React.Fragment>
                        <AddBookForm addNewBook={this.addNewBook} editBook={this.editBook} />
                    <div className="col-xs-offset-6 col-xs-2">
                        <button className="btn btn-warning" onClick={this.loggOut}>Wyloguj</button>
                    </div>
                        <AdminBookListing  books = {this.state.books} removeFromInventory = {this.removeFromInventory}/>
                    </React.Fragment>
                }
            </div>
        )}
}

export default AdminPanel;