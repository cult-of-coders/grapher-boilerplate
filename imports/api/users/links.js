import Users from './collection.js';
import Comments from '/imports/api/comments/collection.js';
import Posts from '/imports/api/posts/collection.js';
import Groups from '/imports/api/groups/collection.js';

Users.addLinks({
    posts: {
        inversedBy: 'owner',
        collection: Posts
    },
    comments: {
        inversedBy: 'user',
        collection: Comments
    },
    groups: {
        collection: Groups,
        field: 'groupIds',
        type: 'many',
        metadata: true,
    }
});

Users.addReducers({
    email: {
        body: {
            emails: 1
        },
        reduce(object) {
            return object.emails[0].address
        }
    }
});