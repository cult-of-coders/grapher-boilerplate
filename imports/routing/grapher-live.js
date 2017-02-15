import { mount } from 'react-mounter';
import { GrapherLive } from 'meteor/cultofcoders:grapher-live';

FlowRouter.route('/grapher', {
    action() {
        mount(GrapherLive);
    }
});