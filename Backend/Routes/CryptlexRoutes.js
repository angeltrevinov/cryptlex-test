const express = require('express');
const axios = require('axios');

const cryplexAPI = 'https://api.cryptlex.com/v3';
const license = cryplexAPI + '/licenses';

const router = express.Router();

router.get('/', function (req, res, next) {
    axios({
        method: 'get',
        url:license,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + process.env.CRYPTLEX_TOKEN
        },
        data: {
            'productId': '0af2a0fe-92f1-4fcf-a312-b89be725b476'
        }
    }).then(response => {
        return res.status(200).json(response.data);
    }).catch(error => {
        return res.status(500).json(error);
    });
});

router.post('/create-license', function (req, res, next) {
    axios({
        method: 'post',
        url: license,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + process.env.CRYPTLEX_TOKEN
        },
        data: {
            'productId': '0af2a0fe-92f1-4fcf-a312-b89be725b476'
        }
    }).then(response => {
        return res.status(200).json(response.data);
    }).catch(error => {
        return res.status(500).json(error);
    });
});

module.exports = router;
