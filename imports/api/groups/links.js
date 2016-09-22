import Groups from './collection.js';
import Users from '/imports/api/users/collection.js';
import Posts from '/imports/api/posts/collection.js';

Groups.addLinks({
    users: {
        collection: Users,
        inversedBy: 'groups'
    },
    posts: {
        collection: Posts,
        inversedBy: 'group'
    }
});
