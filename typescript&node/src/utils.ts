/**
 * 休眠
 *
 * @export
 * @param {number} delay 休眠时间
 * @returns {Promise<any>}
 */
export function sleep(delay: number): Promise<any> {
    return new Promise(res => {
        setTimeout(() => {
            res();
        }, delay);
    });
}
