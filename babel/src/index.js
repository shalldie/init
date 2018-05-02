import { sleep } from "./utils";

(async () => {
    for (let i = 0; i < 10; i++) {
        console.log(new Date().getSeconds());
        await sleep(1000);
    }

    console.log({
        ...{ name: 'tom' }
    })
})();
