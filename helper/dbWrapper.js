var mongoose = require('mongoose');

var db;
module.exports.connect = function connect(url, callbackvalue) {
    db = mongoose.createConnection(url, { server: { auto_reconnect: true } });
    return db;
};

module.exports.getConnection = function getConnection() {
		// db.on('error', function(err) {
        //     conaole.log('errorrrr');
		// 	 debug("Reconnecting from error");
		// 	 db = mongoose.createConnection(url, { server: { auto_reconnect: true } });
		// });
		return db;
};

module.exports.getAll = function getAll(schema, query, fields, options, callbackvalue) {
    console.log('Query in db wrapper', query);

    var objmodel = db.model(schema.options.collection, schema)

    // objmodel.find(query,function(err, result) {
    //     console.log("printing result in wrapper",result);
    //     callbackvalue(err, result);
    //     return;
    // });

    objmodel.findOne(query, function(err, result) {
        console.log("result of abc@gmail.com",result);
        callbackvalue(err, result);
        return;
    })
};




