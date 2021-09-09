const express = require('express');
var ObjectId = require('mongodb').ObjectId;
var mongo = require('mongodb');
const app = express.Router()

const client = require('../../dbConnection');

app.use(express.json())


app.delete('/app/users/:id', (req, res) => {
    try{
        const query = {_id : ObjectId(req.params.id)};
        const collection = client.db('myprj').collection('users');
        const data = collection.deleteOne(query);
        data.then(() => {
            const find = collection.find({}).toArray()
            find.then(record => {
                res.send(record);
            }).catch(err => {
                console.log(err);
                res.send('no data');
            })
        }).catch(err => {
            res.send({});
        })
    }
    catch (err){
        res.send('No Data Available')
    }
})

module.exports = app