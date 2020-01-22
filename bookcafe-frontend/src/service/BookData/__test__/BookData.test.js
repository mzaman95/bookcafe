import React from 'react';
import ReactDOM from 'react-dom';
import BookData from '../../BookData/BookData.service';

it("renders without crashing" , () => {
    const div = document.createElement("div");
    ReactDOM.render(<BookData />, div);
});