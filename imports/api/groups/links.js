import Groups from './collection.js';
import Users from '/imports/api/users/collection.js';
import Posts from '/imports/api/posts/collection.js';

Groups.addLinks({
    users: {
        collection: Users,
        inversedBy: 'groups'
    },
    members: {
        type: 'many',
        collection: Users,
        field: 'memberIds'
    },
    owner: {
        collection: Users,
        field: 'ownerId'
    },
    posts: {
        collection: Posts,
        inversedBy: 'group'
    }
});
