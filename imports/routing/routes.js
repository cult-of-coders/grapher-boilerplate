// Helper function to make loading Routes with FlowRouter and React easier
import route from './lib/router.js';
import './grapher-live';

// Others
import Home from '/imports/ui/Home';
import Demo from '/imports/ui/demo/Wrapper';
import PaginateDemo from '/imports/ui/paginate-demo/Wrapper';

route('/', Home);
route('/demo', Demo);
route('/demo-paginate/:page?', PaginateDemo);
