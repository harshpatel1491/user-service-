const express = require('express');

const app = express.Router()

const client = require('../../dbConnection');

app.use(express.json())

const findById = (id) => {
    return (users.find(ele => ele.id === parseInt(id)))
}

app.put('/app/users', (req, res) => {
    try {
        const collection = client.db('myprj').collection('users');
        collection.find({_id: '6138ac79cbc9225e5dc4e95d'}).toArray((err, data) => {
            res.send(data)
        })
        // if(req.body.id){
        //     collection.insertOne(newUser, (err) => {
        //         assert.equal(err,null);
        //         console.log('user created')
                
        //     })
        //     res.send(users)
        // } else {
        //     throw res.status(404)
        // }
    } catch (err) {
        res.send('User Not Found for Update')
    }
})

module.exports = app