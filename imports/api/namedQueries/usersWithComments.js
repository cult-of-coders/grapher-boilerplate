import { createNamedQuery } from 'meteor/cultofcoders:grapher';

const query = createNamedQuery('usersWithComments', {
    users: {
        profile: 1,
        comments: {
            text: 1,
            $filter({filters, params}) {
                if (params.text) {
                    filters.text = params.text;
                }
            }
        }
    }
});

if (Meteor.isServer) {
    query.expose({
        schema: {
            text: {type: String, optional: true}
        }
    })
}
