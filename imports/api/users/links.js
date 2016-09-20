import Users from './collection.js';
import Comments from '/imports/api/comments/collection.js';
import Posts from '/imports/api/posts/collection.js';

Users.addLinks({
    posts: {
        inversedBy: 'owner',
        collection: Posts
    },
    comments: {
        inversedBy: 'user',
        collection: Comments
    }
});