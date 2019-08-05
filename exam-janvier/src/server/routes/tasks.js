var express = require('express');
var router = express.Router();
const db = require('../modules/db.js');

/* GET home page. */
router.get('/', function (req, res, next) {
    db.db.collection('tasks').find().toArray().then((tasks) => {
        res.json(tasks);
    }).catch((err) => {
        res.status(500).send(err);
    })
})

router.get('/:id', function (req, res, next) {
    db.db.collection('tasks').findOne({ _id: new db.ObjectID(req.params.id) }).then((task) => {
        res.json(task);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.delete('/:id', function (req, res, next) {
    db.db.collection('tasks').findOneAndDelete({ _id: new db.ObjectID(req.params.id) }).then((result) => {
        res.json(result.value);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.post('/', function (req, res, next) {
    db.db.collection('tasks').insertOne(req.label).then((result) => {
        req.label._id = result.insertedId;
        res.json(req.label);
    }).catch((err) => {
        res.status(500).send(err);
    })
});

router.put('/:id', function (req, res, next) {
    delete req.label._id;
    db.db.collection('tasks').findOneAndUpdate({ _id: new db.ObjectID(req.params.id) }, { $set: req.label }, { returnOriginal: false }).then((result) => {
        res.json(result.value);
    }).catch((err) => {
        console.log(err);
        res.status(500).send(err);
    });
});

module.exports = router;
