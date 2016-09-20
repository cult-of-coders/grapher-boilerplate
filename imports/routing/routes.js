import route from './lib/createRoute.js';
import Home from '/imports/ui/Home';
import { GrapherLive } from 'meteor/cultofcoders:grapher-live';
import Demo from '/imports/ui/demo/Wrapper';

route('/', Home);
route('/grapher', GrapherLive);
route('/demo', Demo);