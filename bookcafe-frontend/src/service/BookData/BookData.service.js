import axios from 'axios';

const BOOKCAFE_URL = 'http://localhost:8080/books';

class BookData {

    retrieveAllBooks() {
        return axios.get(`${BOOKCAFE_URL}`);
    }

    deleteBook(id) {
        return axios.delete(`${BOOKCAFE_URL}/${id}`)
    }

    retrieveBook(id) {
        return axios.get(`${BOOKCAFE_URL}/${id}`);
    }

    updateBook(id, book) {
        return axios.put(`${BOOKCAFE_URL}/${id}`, book);
    }

    createBook(book) {
        return axios.post(`${BOOKCAFE_URL}`, book);
    }

}

export default new BookData();