const express = require('express');
var axios = require('axios');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const PORT = 5000;
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

app.use('/api', createProxyMiddleware({ 
    target: 'http://localhost:3000',  // Backend server
    changeOrigin: true
}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-origin", "*")
    res.setHeader('Access-Control-Allow-Methods', "GET,POST,OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
});

app.get('/cyber-leaks/:email', async function(request, response) {
    let email = request.params.email;
    console.log('--Loading cyber leaks for--', email);

    const cyberLeaksResponse = await axios.get('https://api.dehashed.com/search?query=email:'+email+'&size=10000', {
            headers: {
               'Accept': 'application/json'
            },
            auth: {
               username: 'sampath.oops@gmail.com',
               password: '6hmmriun21gzwi5gs0e4zro1g4vbu4vq'
            }
         });
         console.log('--Response from cyber leaks--', cyberLeaksResponse.data);
    if (cyberLeaksResponse != null && cyberLeaksResponse.hasOwnProperty('data')) {
        response.send(cyberLeaksResponse.data);
    } else {
        response.send('not found');
    }
});