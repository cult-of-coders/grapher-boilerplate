import { Meteor } from 'meteor/meteor';
import Users from './collection';

Meteor.publish('self', function () {
    if (!this.userId) {
        return this.ready();
    }

    return Users.find(this.userId, {
        fields: Users.FIELDS
    });
});
