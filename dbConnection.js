const express = require('express');


const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const dbUrl = 'mongodb+srv://admin:admin@cluster0.qfwdf.mongodb.net/myprj?retryWrites=true&w=majority'
const client = new MongoClient(dbUrl)
client.connect((err) => { 
    assert.equal(null, err)
    console.log('database connected success')
})

module.exports =  client;