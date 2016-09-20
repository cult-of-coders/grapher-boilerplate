import Comments from './collection.js';
import Users from '/imports/api/users/collection.js';
import Posts from '/imports/api/posts/collection.js';

Comments.addLinks({
    'user': {
        type: 'one',
        collection: Users,
        field: 'userId',
        index: true
    },
    'post': {
        type: 'one',
        collection: Posts,
        field: 'postId',
        index: true
    }
});
