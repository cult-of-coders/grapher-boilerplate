import Users from './collection.js';
import { restrictFields } from 'meteor/cultofcoders:grapher';

Users.expose((filters, options, userId) => {
    restrictFields(options, ['services', 'createdAt']);
});