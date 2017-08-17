import Tool from './lib/Tool';


(async () => {
    let tool = new Tool();
    for (let i = 0; i < 10; i++) {
        console.log(new Date().getSeconds());
        await tool.sleep(1000);
    }
})();