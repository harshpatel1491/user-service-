const express = require('express');
var ObjectId = require('mongodb');
var mongo = require('mongodb');
const app = express.Router()

const client = require('../../dbConnection');

app.use(express.json())


app.get('/app/users', (req, res) => {
    try{
        const newId = new ObjectId('6138ac79cbc9225e5dc4e95d')
        console.log(newId)
        const collection = client.db('myprj').collection('users');
        collection.findOneAndDelete({_id: newId}).toArray((err, data) => {
            res.send(data)
            console.log(data)
        })
    }
    catch (err){
        res.send('No Data Available')
    }
})

module.exports = app