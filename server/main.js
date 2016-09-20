import '/imports/startup/server';

Meteor.methods({
    'test.method'() {
        console.log('here');

        return 'ok';
    }
});