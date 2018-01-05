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
    objmodel.find(query, fields, options).lean().exec(function(err, result) {
      callbackvalue(err, result);
      return;
    });
};




