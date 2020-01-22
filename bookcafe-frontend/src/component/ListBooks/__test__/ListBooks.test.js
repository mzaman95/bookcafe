import React from 'react';
import ReactDOM from 'react-dom';
import ListBooks from '../ListBooks.component';

it("renders without crashing" , () => {
    const div = document.createElement("div");
    ReactDOM.render(<ListBooks />, div);
});