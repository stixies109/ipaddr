#! /usr/bin/env node

var getIp = require('./ip.js').getIp;
console.log(getIp());

setTimeout(function(){
    console.log('end');
}, 3000);