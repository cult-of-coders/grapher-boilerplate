import route from './lib/createRoute.js';
import Home from '/imports/ui/Home';
import { GrapherLive, GrapherDocumentation } from 'meteor/cultofcoders:grapher-live';
import Demo from '/imports/ui/demo/Wrapper';
import PaginateDemo from '/imports/ui/paginate-demo/Wrapper';

route('/', Home);
route('/grapher', GrapherLive);
route('/grapher-docs', GrapherDocumentation);
route('/demo', Demo);
route('/demo-paginate/:page?', PaginateDemo);