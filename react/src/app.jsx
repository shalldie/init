// import 'react-hot-loader/patch';

import React from 'react';
import ReactDOM from 'react-dom';

// import { AppContainer } from 'react-hot-loader';
// import { Router, Route, hashHistory } from 'react-router';

import Todos from './components/Todos';

ReactDOM.render(
    <Todos />,
    document.getElementById('root')
);


/*const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
}

render(Todos);

if (module.hot) {
    module.hot.accept('./components/Todos', () => { render(Todos) });
}   */