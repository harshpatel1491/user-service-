const express = require('express');
var ObjectId = require('mongodb').ObjectId;
var mongo = require('mongodb');
const app = express.Router()

const client = require('../../dbConnection');

app.use(express.json())


app.get('/app/users', (req, res) => {
    try{
        const collection = client.db('myprj').collection('users');
        const data = collection.find({}).toArray();
        data.then(record => {
            res.send(record);
        }).catch(err => {
            console.log(err);
            res.send({});
        })
    }
    catch (err){
        res.send('No Data Available')
    }
})

module.exports = app