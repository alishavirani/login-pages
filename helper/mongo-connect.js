const {MongoClient, ObjectID} = require('mongodb');

let connString = 'mongodb://pa_admin:pa%402017@172.16.60.48:27017/node-test?authSource=partner-app'

MongoClient.connect(connString, (err, client) => {
    if (err) {
        return console.log('Connection to mongo server failed!!!', err);
    }
    console.log('Connected to mongodb server');
    const db = client.db("node-test");
   

    // db.collection('Login').insertMany([{
    //     email:'abc@gmail.com',
    //     password: 'abc123'
    // }, {
    //     email:'xyz@gmail.com',
    //     password: 'xyz123'
    // }, {
    //     email:'pqr@gmail.com',
    //     password: 'pqr123'
    // }], (err, res) => {
    //     if(err) {
    //         return console.log('Unable to insert doc');
    //     }
    //     console.log((JSON.stringify(res.ops, undefined, 2)));
    // });

    db.collection('Login').find().toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Error in fetching', err);
    });
    //db.close();
});


