const db = require ('../database/models');

module.exports = {
    auth: payload => db.User.findOne(payload)
}