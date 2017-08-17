export default function sleep(delay): Promise<void> {
    return new Promise<void>(res => {
        setTimeout(function () {
            res();
        }, delay);
    })
}