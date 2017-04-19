import React from 'react';
import ReactDOM from 'react-dom';

// import { Router, Route, hashHistory } from 'react-router';

import Todos from './components/Todos';



ReactDOM.render(
    <Todos />,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept()
}