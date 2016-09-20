import {SimpleSchema} from 'meteor/aldeed:simple-schema';

export default new SimpleSchema({
    _id: {type: String},
    emails: {type: Array},
    'emails.$': {type: Object},
    'emails.$.address': {type: String},
    'emails.$.verified': {type: Boolean},
    createdAt: {type: Date},
    services: {type: Object, blackbox: true},
    roles: {type: null, blackbox: true, optional: true},
    profile: {
        type: Object,
        optional: true
    },
    'profile.$.firstname': {
        type: String,
        optional: true
    },
    'profile.$.lastname': {
        type: String,
        optional: true
    }
});