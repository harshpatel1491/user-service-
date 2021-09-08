const express = require('express');

const app = express.Router()

app.use(express.json())

let users = [
    {
        id: 0,
        name: 'Harsh'
    },
    {
        id: 1,
        name: 'Mukesh'
    },
    {
        id: 2,
        name: 'Sonu',
        age: "23"
    },
]

const findById = (id) => {
    return (users.find(ele => ele.id === parseInt(id)))
}

app.delete('/app/users/:id', (req, res) => {
    try {
        if(findById(req.params.id)){
            users = users.filter(ele => ele.id !== parseInt(req.params.id))
            res.send(users)
        } else {
            throw res.status(404)
        }
    } catch (err) {
        res.send('User Not Found for Delete')
    }
})

module.exports = app