
export function sleep(delay) {
    return new Promise(res => {
        setTimeout(() => {
            res();
        }, delay);
    })
}

/**
 * 重复字符串
 *
 * @export
 * @param {string} str
 */
export function demo(str) {
    return str.repeat(2);
}
