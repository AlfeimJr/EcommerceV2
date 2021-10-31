const services = require('./services');
const Boom = require('boom');

module.exports = {
    auth: assync ctx => {
        const { req, res } = ctx;
        const user = await services.auth(req.body)
        if (user) {
            res.body = user
        } else {
            res.body = { result: Boom.badRequest() }
        };
    };
}
