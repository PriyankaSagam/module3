module.exports = function (lowNo, highNo) {
    randomNo = Math.floor(Math.random()*(highNo - lowNo + 1)+lowNo);
    return randomNo;
}