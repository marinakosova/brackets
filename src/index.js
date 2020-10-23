module.exports = function check(str, bracketsConfig) {
    obj = Object.fromEntries(bracketsConfig);
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let elem = str[i];
        let lastStackElement = stack[stack.length - 1]
        if (elem === obj[lastStackElement]) {
            stack.pop();
        } else if (obj[elem]) {
            stack.push(elem);
        } else {
            return false;
        }
    }

    if (stack.length == 0)
        return true;
    else
        return false;
}