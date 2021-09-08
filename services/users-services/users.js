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

app.get('/app/users', (req, res) => {
    try{
        if(users.length > 0){
            res.send(users)
        } else {
            throw res.status(404)
        }
    }
    catch (err){
        res.send('No Data Available')
    }
})

app.get('/app/users/:id', (req, res) => {
    try{
        if(findById(req.params.id)){
            res.send(findById(req.params.id))
        } else {
            
            throw res.status(404)
        }
    } catch (err) {
        res.send('User Not Found')
    }
})

app.post('/app/users', (req, res) => {
    try {
        if (req.body.name && req.body.age){
            let newUser = {
                id: users.length + 1,
                name: req.body.name,
                age: req.body.age
            }
            users.push(newUser)
            res.send(users)
        } else {
            throw res.status(400)
        }
    } catch (err) {
        res.send('Name & Age is required')
    }
})

app.put('/app/users', (req, res) => {
    try {
        if(findById(req.body.id)){
            users = users.map(ele => {
                if(ele.id === parseInt(req.body.id)){
                    return {...ele,  ...req.body}
                } else {
                    return ele
                }
            })
            console.log(users)
            res.send(users)
        } else {
            throw res.status(404)
        }
    } catch (err) {
        res.send('User Not Found for Update')
    }
})

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