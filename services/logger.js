var intel=require('intel');

var fmtr1= new intel.Formatter('%(name)s>\n[%(date)s] %(levelname)s: %(message)s');
var fmtr2= new intel.Formatter({
    'format': '%(name)s>\n[%(date)s] %(levelname)s %(message)s',
    'colorize': true
});


module.exports = function(fileName) {    
    intel.addHandler(new intel.handlers.File({formatter: fmtr1,file:fileName}));
    intel.addHandler(new intel.handlers.Console({formatter:fmtr2}));
    return intel
}