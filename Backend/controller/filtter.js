// const { isEmpty } = require('lodash');

module.exports = function (app) {
    app.get('/filter', async function (req, res) {
        return res.status(200).send('Test');

    });
}


