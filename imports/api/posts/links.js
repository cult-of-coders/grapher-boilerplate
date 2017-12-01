import Posts from './collection.js';
import Users from '/imports/api/users/collection.js';
import Comments from '/imports/api/comments/collection.js';
import Tags from '/imports/api/tags/collection.js';
import Groups from '/imports/api/groups/collection.js';

Posts.addLinks({
    owner: {
        type: 'one',
        collection: Users,
        field: 'ownerId',
        index: true
    },
    comments: {
        collection: Comments,
        inversedBy: 'post'
    },
    tags: {
        collection: Tags,
        type: 'many',
        field: 'tagIds',
        index: true
    },
    group: {
        type: 'one',
        collection: Groups,
        metadata: true,
        field: 'groupLink',
    }
});