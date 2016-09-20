import { Meteor } from 'meteor/meteor';

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


export default Users;