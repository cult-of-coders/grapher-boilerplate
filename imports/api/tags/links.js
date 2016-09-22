import Tags from './collection.js';
import Posts from '/imports/api/posts/collection.js';

Tags.addLinks({
    posts: {
        collection: Posts,
        inversedBy: 'tags'
    }
});
