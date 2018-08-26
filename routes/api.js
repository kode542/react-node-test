var express = require('express');
var router = express.Router();
var body = require('body-parser');
var axios = require('axios');
var CircularJSON = require('circular-json');



router.post('/', function(req, res, next) {
    // Handle the string
    if (req.body.text) {
        // Send string back to front end
        res.send(req.body.text);
        console.log('Content: ' + req.body.text + ' POST /api')

    }
    // Handle the HTTP request
    else if (req.body.method && req.body.url) {
        // In case method is GET
        if (req.body.method === 'get') {
            // Send a GET request to the URL
            axios.get(req.body.url)
                .then(response => {
                    // Convert response to string to be sent back to front-end
                    let json = CircularJSON.stringify(response['data']);
                    res.send(json);
                }).catch(function (error) {
                    console.log(error);
            });
            console.log('Method : ' + req.body.method + '\tURL : ' + req.body.url);
        }
        else{
            // Send a POST request to the URL
            axios.post(req.body.url)
                .then(response => {
                    // Convert response to string to be sent back to front-end
                    let json = JSON.stringify(response['data']);
                    // Send stringified json into array
                    res.send([json]);
                }).catch(function(error) {
                console.log(error);
            });
        }
    }
});




module.exports = router;