import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './helloworld/HelloWorld';

import Reverse from './reverse/Reverse';

let args = {
    name: 'lucy'
};

ReactDOM.render(
    <Reverse {...args} />,
    document.getElementById('root')
);