import Users from './collection.js';
import { Exposure } from 'meteor/cultofcoders:grapher';

Users.expose((filters, options, userId) => {
    Exposure.restrictFields(options, ['services', 'createdAt']);
});