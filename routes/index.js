'use strict';


module.exports = (app) => {
    app
        .use('/organizer', require('./organizer-space'))
        .use('/program', require('./programm-space'))
        .use('/expert', require('./expert-space'))
        .use('/author', require('./author-space'));

    app
        .use('/auth', require('./core/auth'))
        .use('/api/users', require('./api/user'))
        .use('/api/congres', require('./api/congre'))
        .use('/api/publications', require('./api/publication'));
};
