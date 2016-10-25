// Helper function to make loading Routes with FlowRouter and React easier
import route from './lib/createRoute.js';

// Grapher
import { GrapherLive, GrapherDocumentation } from 'meteor/cultofcoders:grapher-live';
route('/grapher', GrapherLive);
route('/grapher-docs', GrapherDocumentation);

// Others
import Home from '/imports/ui/Home';
import Demo from '/imports/ui/demo/Wrapper';
import PaginateDemo from '/imports/ui/paginate-demo/Wrapper';

route('/', Home);
route('/demo', Demo);
route('/demo-paginate/:page?', PaginateDemo);