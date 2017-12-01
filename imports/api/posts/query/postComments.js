import {createQuery} from 'meteor/cultofcoders:grapher';

/**
 * We do not expose comments directly. We only have access to them from posts.
 */
export default createQuery({
    posts: {
        $filter({filters, params}) {
            filters._id = params._id
        },
        commentIds: 1,
        comments: {
            text: 1,
            user: {
                emails: 1
            }
        }
    }
});