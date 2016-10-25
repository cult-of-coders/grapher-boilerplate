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

Users.attachSchema(UserSchema);

export default Users;