import { mount, withOptions } from 'react-mounter';
import App from '/imports/ui/App.jsx';

export default (path, component, propsFn) => {
    FlowRouter.route(path, {
        action(params) {
            let componentProps = {};
            if (typeof(propsFn) == 'function') {
                componentProps = propsFn(...arguments);
            } else if (typeof(propsFn) == 'object') {
                componentProps = _.extend(params, propsFn);
            } else {
                componentProps = params;
            }

            mount(App, {main: component, routeProps: componentProps});
        }
    });
};