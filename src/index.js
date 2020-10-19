module.exports = function reverse (n) {
    module.exports = function reverse(n) {
        let num = Math.abs(n)
        let str = String(num);
        let revers = '';
        for (let i = 0; i < str.length; i++) {
            revers = (str[i]) + revers;
        }
        return Number(revers);
    }
}
