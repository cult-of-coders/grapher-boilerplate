import { createQuery } from 'meteor/cultofcoders:grapher';

export default createQuery({
    posts: {
        $filter({options, params}) {
            options.skip = params.skip;
            options.limit = params.limit;
        },
        title: 1,
        owner: {
            emails: 1
        }
    }
});