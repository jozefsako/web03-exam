var express = require('express');
var router = express.Router();
const db = require('../modules/db.js');

/* GET home page. */
router.get('/me', function (req, res, next) {
    db.db.collection('users').findOne().then((user) => {
        res.json(user);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

module.exports = router;
