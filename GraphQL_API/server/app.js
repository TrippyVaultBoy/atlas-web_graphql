require('dotenv').config();
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

const app = express();

const dbUsername = process.env.MONGO_USERNAME;
const dbPassword = process.env.MONGO_PASSWORD;
const dbName = process.env.MONGO_DB_NAME;
const dbHost = process.env.MONGO_DB_HOST;

const uri = `mongodb+srv://${dbUsername}:${dbPassword}@${dbHost}/?retryWrites=true&w=majority&appName=${dbName}`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected!'))
    .catch(err => console.error('Connection error:', err));

app.use('/graphql',graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});