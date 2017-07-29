const attachTo = (app, data) => {
    const controller = require('./controller').init(data);

    app.get('/user', (req, res) => {
        return controller.getAll(req, res);
    });

    app.get('/user/:id', (req, res) => {
        return controller.getOne(req, res);
    });
};

module.exports = { attachTo };
