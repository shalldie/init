import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './helloworld/HelloWorld';

let args = {
    name: 'tom'
};

ReactDOM.render(
    <HelloWorld {...args} />,
    document.getElementById('root')
);