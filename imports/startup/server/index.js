import './redis';

// Imports all needed by grapher to be used
import '/imports/api/grapher';

// Note: the file below is not added on the client, exposure is a server-side concern.
import '/imports/api/grapher/exposures';

// Loads the demo data
import './fixtures.js';

// Initializez grapher-live usage
import './grapher-live.js';

import './user-presence';

Meteor.startup(() => {
    // Kadira.connect('XG2ZaxPrjfgHwuweY', 'b47ed6f3-51c6-4d31-a5bb-82543970c224');
});

Meteor.publish('test', function () {
    return Meteor.users.find();
})