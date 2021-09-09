const express = require('express');
var ObjectId = require('mongodb').ObjectId;

const app = express.Router()

const client = require('../../dbConnection');

app.use(express.json())

app.put('/app/users', (req, res) => {
    const query = {_id : ObjectId(req.body.id)};
    let updateUser = {
        name: req.body.name,
        age: req.body.age
    }
    const collection = client.db('myprj').collection('users');
    const update = collection.updateOne(query, {$set: updateUser})
    update.then(() => {
        const find = collection.findOne(query)
        find.then(result => {
            res.send(result)
        }).catch(err => {
            res.send('no data ha')
        })
    }).catch(err => {
        console.log(err)
        res.send('no data')
    })
})

module.exports = app