const express = require('express');
const assert = require('assert');

const app = express.Router()
app.use(express.json())

const client = require('../../dbConnection');

app.post('/app/users', (req, res) => {
    try {
        if(req.body.name && req.body.age) {
            let newUser = {
                name: req.body.name,
                age: req.body.age
            }
            const collection = client.db('myprj').collection('users');
            collection.insertOne(newUser, (err) => {
                assert.equal(err,null);
                console.log('user created')
                collection.find({}).toArray((err, data) => {
                    res.send(data)
                })
            })
        } else {
            throw res.status(400)
        }
    } catch (err) {
        console.log(err)
        res.send('Name & Age is required')
    }
})

 

module.exports = app