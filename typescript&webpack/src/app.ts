declare function require(moduleName: string): any;

import 'babel-polyfill';

import Tool from './lib/Tool';


(async () => {
    let tool = new Tool();
    for (let i = 0; i < 10; i++) {
        document.body.innerHTML += new Date().getSeconds() + "<br>";
        await tool.sleep(1000);
    }
})();

