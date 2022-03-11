const mongodb = require('mongodb');
const constants = require('./constants');

const MongoClient = mongodb.MongoClient;


let _db;

const mongoConnect = callback => {
    MongoClient.connect(`mongodb+srv://${constants.USERNAME}:${constants.PASSWORD}@cluster0.j8tt0.mongodb.net/questions?retryWrites=true&w=majority`)
        .then(client => {
            console.log('Connected to MongoDB!');
            _db = client.db();
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};

const getDb = () => {
    if (_db) {
        return _db;
    }

    throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;