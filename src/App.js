import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div >
        <h1> Hello World! </h1>
        <h3> From inside the App </h3>
        </div>
    );
}

ReactDOM.render( < App /> , document.getElementById('root'))