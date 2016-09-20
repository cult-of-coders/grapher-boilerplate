import Posts from './collection.js';
import Users from '/imports/api/users/collection.js';
import Comments from '/imports/api/comments/collection.js';

Posts.addLinks({
    'owner': {
        type: 'one',
        collection: Users,
        field: 'ownerId'
    },
    'comments': {
        collection: Comments,
        inversedBy: 'post'
    }
});