import { Meteor } from 'meteor/meteor';
import UserSchema from './schema';

const Users = Meteor.users;

Users.helpers({
    getEmail() {
        return _.first(this.emails).address;
    },

    getFullname() {
        const {firstname, lastname} = this.profile;

        return `${firstname} ${lastname}`;
    }
});

// Users.attachSchema(UserSchema);

if (Meteor.isServer) {
    Users.allow({
        insert: () => true,
        update: () => true,
        remove: () => true,
    });
    Users.deny({
        insert: () => false,
        update: () => false,
        remove: () => false,
    })
}

export default Users;