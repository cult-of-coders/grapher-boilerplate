import Users from './collection.js';

Users.expose((filters, options, userId) => {
    if (options.fields) {
        options.fields = _.omit(options.fields, 'services', 'createdAt');
    } else {
        options.fields = _.extend({}, options.fields, {
            services: 0,
            createdAt: 0
        })
    }
});