export default class Tool {
    constructor() {

    }
    public sleep(delay): Promise<void> {
        return new Promise<void>(res => {
            setTimeout(function () {
                res();
            }, delay);
        });
    }
}