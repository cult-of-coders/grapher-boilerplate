import { createQuery } from 'meteor/cultofcoders:grapher';

const query = createQuery('postsWithGroups', {
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
