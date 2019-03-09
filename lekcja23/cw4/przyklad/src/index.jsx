import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import img from "./img/img2.jpg"
import { msg } from './test';



ReactDOM.render(
    <img onClick={() => alert(msg)} src={img} alt='obrazek' />,
    document.getElementById('app')
);
