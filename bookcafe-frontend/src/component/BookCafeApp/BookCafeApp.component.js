import React from "react";
import ListBooks from "../ListBooks/ListBooks.component";
import UpdateForm from "../../forms/UpdateForm/UpdateForm.component";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class BookCafeApp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>BookCafé</h1>
        <Router>
          <Switch>
            <Route path="/" exact component={ListBooks} />
            <Route path="/books" exact component={ListBooks} />
            <Route path="/books/:id" exact component={UpdateForm} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default BookCafeApp;
