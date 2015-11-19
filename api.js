var config = require('config');
var Wreck = require('wreck');
var marked = require('marked');
var Boom = require('boom');

var wreck = Wreck.defaults(config.api);


// Fetch by ID or Slug
module.exports.fetchOne = function (request, reply) {

    wreck.get('/advisories/' + request.params.id, function (err, res, payload) {
        if (err || res.statusCode !== 200) {
            if (err) {
                request.log(['error', 'api'], err);
            }

            return reply(Boom.notFound(''));
        }

        if (payload.overview === null) {
            payload.overview = '';
        }

        if (payload.recommendation === null) {
            payload.recommendation = '';
        }

        if (payload.references === null) {
            payload.references = '';
        }

        return reply(payload);
    });
};

// Fetch by Module Name
module.exports.fetchByModule = function (request, reply) {

    wreck.get('/advisories/module/' + request.params.module_name, function (err, res, payload) {
        if (err || res.statusCode !== 200) {
            if (err) {
                request.log(['error', 'api'], err);
            }

            return reply(Boom.notFound(''));
        }

        if (payload.offset > payload.total) {
            return reply().takeover().redirect('/advisories');
        }
        
        return reply(payload);
    });
};

module.exports.fetchAll = function (request, reply) {
    var limit = 10;
    var offset = request.query.page * limit;
    var url = '/advisories?limit=' + limit + '&offset=' + offset;

    wreck.get(url, function (err, res, payload) {

        if (err || res.statusCode !== 200) {
            if (err) {
                request.log(['error', 'api'], err);
            }
            return reply(Boom.notFound(''));
        }

        if (payload.offset > payload.total) {
            return reply().takeover().redirect('/advisories');
        }

        return reply(payload);
    });
};
