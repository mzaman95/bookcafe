import React from "react";
import BookData from "../../service/BookData/BookData.service";

class ListBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      message: null
    };
    this.refreshBooks = this.refreshBooks.bind(this);
    this.deleteBookClicked = this.deleteBookClicked.bind(this);
    this.updateBookClicked = this.updateBookClicked.bind(this);
    this.addBookClicked = this.addBookClicked.bind(this);
  }

  componentDidMount() {
    this.refreshBooks();
  }

  refreshBooks() {
    BookData.retrieveAllBooks().then(response => {
      console.log(response);
      this.setState({ books: response.data });
    });
  }

  deleteBookClicked(id) {
    BookData.deleteBook(id).then(response => {
      this.setState({ message: `Delete of book ${id} Successful` });
      this.refreshBooks();
    });
  }

  updateBookClicked(id) {
    console.log("update " + id);
    this.props.history.push(`/books/${id}`);
  }

  addBookClicked() {
    this.props.history.push(`/books/-1`);
  }

  render() {
    return (
      <div className="container">
        <h3>Our Book Catalog</h3>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>ISBN#</th>
                <th>Title</th>
                <th>Author</th>
                <th>Description</th>
                <th colSpan="2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.books.map(book => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.description}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => this.deleteBookClicked(book.id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => this.updateBookClicked(book.id)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row">
            <button className="btn btn-success" onClick={this.addBookClicked}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ListBooks;
