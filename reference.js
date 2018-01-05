var mongoose = require('mongoose');

var db;
module.exports.connect = function connect(url, callbackvalue) {
    db = mongoose.createConnection(url, { server: { auto_reconnect: true } });
    return db;
};

module.exports.getConnection = function getConnection() {
		// db.on('error', function(err) {
		// 	 debug("Reconnecting from error");
		// 	 db = mongoose.createConnection(url, { server: { auto_reconnect: true } });
		// });
		return db;
};

module.exports.getAll = function fetchAll(schema, query, fields, options, callbackvalue) {
    var objmodel = db.model(schema.options.collection, schema);
    objmodel.find(query, fields, options).lean().exec(function(err, result) {
      callbackvalue(err, result);
      return;
    });
};

module.exports.getDistinct = function getDistinct(schema, query, callbackvalue) {
    var objmodel = db.model(schema.options.collection, schema);
    objmodel.distinct(query).lean().exec(function(err, result) {
      callbackvalue(err, result);
      return;
    });
};


module.exports.get = function fetchOne(schema, query, callbackvalue) {
    var objmodel = db.model(schema.options.collection, schema);
    objmodel.findOne(query).lean().exec(function(err, result) {
      callbackvalue(err, result);
      return;
    });
};

module.exports.set = function insert(schema, json, callbackvalue) {
		var objmodel = db.model(schema.options.collection, schema);
		objmodel.create(json, function(err, result) {
				var args = Array.prototype.slice.call(arguments);
				args.shift();
				if (args.length > 1)
						callbackvalue(err, args);
				else
						callbackvalue(err, args[0]);
		});
};

module.exports.delete = function removeQuery(schema, query, callbackvalue) {
    var objmodel = db.model(schema.options.collection, schema);
  	objmodel.remove(query, function(err, result) {
        callbackvalue(err, result);
    });
};

module.exports.put = function updateQuery(schema, query, json, callbackvalue) {
		var objmodel = db.model(schema.options.collection, schema);
		objmodel.update(query, json, { upsert: false }, function(err, n, result) {
				callbackvalue(err, n, result);
		});
};

module.exports.getAndPut = function fetchOneAndUpdate(schema, query, update, options, callbackvalue) {
    var objmodel = db.model(schema.options.collection, schema);
    objmodel.findOneAndUpdate(query, update, options, function(err, result) {
        callbackvalue(err, result);
    });
};

module.exports.aggregateQuery = function aggregateQuery(schema, unwindObj1, projectQuery1, matchQuery, lookupQuery, unwindObj2, projectQuery2, callbackvalue) {
		var objmodel = db.model(schema.options.collection, schema);
		objmodel.aggregate([{ $unwind: unwindObj1 }, { $project: projectQuery1 }, { $match : matchQuery }, { $lookup: lookupQuery }, { $unwind: unwindObj2 }, { $project: projectQuery2 }], function(err, result) {
	    callbackvalue(err, result);
		});
};

module.exports.aggregateQueryGroup = function aggregateQueryGroup(schema, unwindObj1, projectQuery1, matchQuery, lookupQuery, unwindObj2, projectQuery2, groupQuery, callbackvalue) {
		var objmodel = db.model(schema.options.collection, schema);
		objmodel.aggregate([{ $unwind: unwindObj1 }, { $project: projectQuery1 }, { $match : matchQuery }, { $lookup: lookupQuery }, { $unwind: unwindObj2 }, { $project: projectQuery2 }, { $group: groupQuery }], function(err, result) {
	    callbackvalue(err, result);
		});