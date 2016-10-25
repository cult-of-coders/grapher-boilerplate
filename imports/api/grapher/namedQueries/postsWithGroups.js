import { createNamedQuery } from 'meteor/cultofcoders:grapher';

const query = createNamedQuery('postsWithGroups', {
    posts: {
        title: 1,
        group: {
            name: 1
        }
    }
});

if (Meteor.isServer) {
    query.expose()
}
