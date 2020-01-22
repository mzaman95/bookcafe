import React from 'react';
import ReactDOM from 'react-dom';
import BookCafeApp from '../BookCafeApp.component';

it("renders without crashing" , () => {
    const div = document.createElement("div");
    ReactDOM.render(<BookCafeApp />, div);
});