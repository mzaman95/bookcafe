import React from "react";
import BookData from "../../service/BookData/BookData.service";
import { Formik, Form, Field, ErrorMessage } from "formik";

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      title: "",
      author: "",
      description: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    console.log(this.state.id);

    // eslint-disable-next-line
    if (this.state.id == -1) {
      return;
    }

    BookData.retrieveBook(this.state.id).then(response =>
      this.setState({
        title: response.data.title,
        author: response.data.author,
        description: response.data.description
      })
    );
  }

  onSubmit(values) {
    console.log(values);
    let book = {
      id: this.state.id,
      title: values.title,
      author: values.author,
      description: values.description,
      targetDate: values.targetDate
    };

    if (this.state.id === -1) {
      BookData.createBook(book).then(() => this.props.history.push("/books"));
    } else {
      BookData.updateBook(this.state.id, book).then(() =>
        this.props.history.push("/books")
      );
    }

    console.log(values);
  }

  validate(values) {
    let errors = {};

    // Validation for author
    if (!values.author) {
      errors.author = "Enter an author's name.";
    }

    // Validation for title
    if (!values.title) {
      errors.title = "Enter a title.";
    }

    // Validation for description
    if (!values.description) {
      errors.author = "Enter a description.";
    } else if (values.description.length < 5) {
      errors.description = "Enter at least 5 characters in the description.";
    }

    return errors;
  }

  render() {
    let { id, title, author, description } = this.state;

    return (
      <div>
        <h3>Book Details</h3>
        <div className="container">
          <Formik
            initialValues={{ id, title, author, description }}
            enableReinitialize={true}
            onSubmit={this.onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            validate={this.validate}
          >
            {props => (
              <Form>
                <ErrorMessage
                  name="author"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="alert alert-warning"
                />
                <fieldset className="form-group">
                  <label>Title</label>
                  <Field className="form-control" type="text" name="title" />
                </fieldset>
                <fieldset className="form-group">
                  <label>Author</label>
                  <Field className="form-control" type="text" name="author" />
                </fieldset>
                <fieldset className="form-group">
                  <label>Description</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="description"
                  />
                </fieldset>
                <button className="btn btn-success" type="submit">
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default UpdateForm;
