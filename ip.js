#! /usr/bin/env node
/**
 * 系统模块
 * @type {Object}
 */
var os = require('os');
/**
 * 获得系统的网卡列表
 * @type {Object}
 */
var ipObj = os.networkInterfaces();
var result = [];

for(var i in ipObj) {
    // 获得某个网卡下面的ip列表
    var ipList = ipObj[i];
    for(var j = 0; j < ipList.length; j += 1) {
        // 某个网卡的某个ip
        var ip = ipList[j];
        if(ip.family === 'IPv4') {
            result.push(ip.address);
        }
    }
}
console.log(result);

setTimeout(function(){
    console.log('end');
}, 3000);