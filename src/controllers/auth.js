const services = require('../features/services');
//const Boom = require('boom');

module.exports = {
    auth: async ctx => {
        const { req, res } = ctx;
        const user = await services.auth(req.body)
        if (user) {
            res.body = user
        } else {
            res.body = { result: Boom.badRequest() }
        };
    },
}
