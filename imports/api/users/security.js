import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import UserSchema from './schema';
import Users from './collection';

Users.FIELDS = {
    emails: 1,
    roles: 1,
    profile: 1
};

Accounts.validateNewUser((user) => {
    UserSchema.validate(user);

    // Return true to allow user creation to proceed
    return true;
});
