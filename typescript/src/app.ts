declare function require(moduleName: string): any;

require('babel-polyfill');

function sleep(delay) {
    return new Promise<void>(res => {
        setTimeout(function () {
            res();
        }, delay);
    })
}

(async () => {
    document.body.innerHTML += new Date().getSeconds() + "<br>";
    await sleep(1000);
    document.body.innerHTML += new Date().getSeconds() + "<br>";
})();