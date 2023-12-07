// days-of-week.js

// console.log(module);

// this runs only once when days-of-week is imported into script
// let example = 2 + 3;
// console.log(example);

// console.log('days-of-week was required')

// this one will be overwritten by the second export
// module.exports = 'Per Scholas';
// we can export multiple things by exporting them as an object
// module.exports = {stringExport: 'Per Scholas', 
// arrayExport: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']};
module.exports.weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

module.exports.getWeekday = function(dayNo) {
    if (dayNo < 0 || dayNo > 6) dayNo = 0;
    return this.weekdays[dayNo];
}