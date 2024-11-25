const https = require("https")
const config = require("../configs/config.json")

const send = async (bodyId, to, args) => {
    const data = JSON.stringify({
        'bodyId': 0,
        'to': "",
        'args': ['arg1', 'arg2']
    });
    
    const options = {
        hostname: 'console.melipayamak.com',
        port: 443,
        path: '',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    };
    
    const req = https.request(options, res => {
        console.log('statusCode: ' + res.statusCode);
    
        res.on('data', d => {
            process.stdout.write(d)
        });
    });
    
    req.on('error', error => {
        console.error(error);
    });
    
    req.write(data);
    req.end();
}

module.exports = {
    send
}