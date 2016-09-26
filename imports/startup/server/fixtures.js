import { Random } from 'meteor/random';

import Users from '/imports/api/users/collection';
import Comments from '/imports/api/comments/collection';
import Posts from '/imports/api/posts/collection';
import Tags from '/imports/api/tags/collection';
import Groups from '/imports/api/groups/collection';

const USERS = 10;
const POST_PER_USER = 20;
const COMMENTS_PER_POST = 10;
const TAGS = ['JavaScript', 'Meteor', 'React', 'Other'];
const GROUPS = ['JavaScript', 'Meteor', 'React', 'Other'];
const COMMENT_TEXT_SAMPLES = [
    'Good', 'Bad', 'Neutral'
];

const createUser = (email, password, roles) => {
    const userId = Accounts.createUser({email, password});

    Roles.addUsersToRoles(userId, roles);

    return Users.findOne(userId);
};

Meteor.startup(() => {
    if (Users.find().count() > 0) {
        return;
    }

    createUser('admin@app.com', '12345', 'ADMIN');

    let tags = TAGS.map(name => Tags.insert({name}));
    let groups = GROUPS.map(name => Groups.insert({name}));

    let users = [];
    _.each(_.range(USERS), (idx) => {
        users.push(
            createUser(`user-${idx + 1}@app.com`, '12345', 'ADMIN')
        );
    });

    _.each(users, (user) => {
        const userPostLink = Users.getLink(user, 'posts');
        const userGroupLink = Users.getLink(user, 'groups');

        userGroupLink.add(_.sample(groups), {
            isAdmin: _.sample([true, false])
        });

        _.each(_.range(POST_PER_USER), (idx) => {
            let post = {
                title: `User Post - ${idx}`
            };

            userPostLink.add(post);
            const postCommentsLink = Posts.getLink(post, 'comments');
            const postTagsLink = Posts.getLink(post, 'tags');
            const postGroupLink = Posts.getLink(post, 'group');
            postGroupLink.set(_.sample(groups), {random: Random.id()});

            postTagsLink.add(_.sample(tags));

            _.each(_.range(COMMENTS_PER_POST), (idx) => {
                let comment = {
                    text: _.sample(COMMENT_TEXT_SAMPLES)
                };

                postCommentsLink.add(comment);
                Comments.getLink(comment, 'user').set(_.sample(users));
            })
        })
    });

    console.log('[ok] fixtures have been loaded.');
});