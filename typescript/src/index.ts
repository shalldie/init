declare function require(moduleName: string): any;

require('es6-promise').polyfill();

function sleep(delay) {
    return new Promise<void>(res => {
        setTimeout(function () {
            res();
        }, delay);
    })
}

(async () => {
    console.log('hello');
    await sleep(1000);
    console.log('world');
})();