// It is a good idea to import these collections to have them registered
// Because when we use createQuery({collection: 'xxx'}), it will try to search to see
// if any collection with that name has been loaded, and it could throw an exception
import Comments from '/imports/api/comments/collection';
import '/imports/api/groups/collection';
import '/imports/api/posts/collection';
import '/imports/api/tags/collection';
import '/imports/api/users/collection';

// Links are imported outside collection level
// The reason is that we may have two collections referencing each other, and this results
// in having the Collection object as {__esModule: ...}, and we need the true instantation of it

import '/imports/api/comments/links';
import '/imports/api/posts/links';
import '/imports/api/users/links';
import '/imports/api/tags/links';
import '/imports/api/groups/links';

// We also need to import the named queries
// Otherwise they will be unusable without specifically importing them.
import './namedQueries';
