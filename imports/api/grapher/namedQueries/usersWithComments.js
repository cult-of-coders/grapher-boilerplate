import { createQuery } from 'meteor/cultofcoders:grapher';
import {Match} from 'meteor/check';

const query = createQuery('usersWithComments', {
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
        validateParams: {
            text: Match.Maybe(String)
        }
    })
}
