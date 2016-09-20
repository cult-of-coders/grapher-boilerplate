import Users from '/imports/api/users/collection';
import Comments from '/imports/api/comments/collection';
import Posts from '/imports/api/posts/collection';

const USERS = 10;
const POST_PER_USER = 20;
const COMMENTS_PER_POST = 10;
const COMMENT_TEXT_SAMPLES = [
    'Good', 'Bad', 'Neutral'
];

Meteor.startup(() => {
    if (Users.find().count() > 0) {
        return;
    }

    const createUser = (email, password, roles) => {
        const userId = Accounts.createUser({email, password});

        Roles.addUsersToRoles(userId, roles);

        return Users.findOne(userId);
    };

    Meteor.startup(function () {
        if (Users.find().count() > 0) {
            return true;
        }

        createUser('admin@app.com', '12345', 'ADMIN');

        let users = [];
        _.each(_.range(USERS), (idx) => {
            users.push(
                createUser(`user-${idx + 1}@app.com`, '12345', 'ADMIN')
            );
        });

        _.each(users, (user) => {
            const userPostLink = Users.getLink(user, 'posts');

            _.each(_.range(POST_PER_USER), (idx) => {
                let post = {
                    title: `User Post - ${idx}`
                };

                userPostLink.add(post);
                const postCommentsLink = Posts.getLink(post, 'comments');
                const userCommentsLink = Users.getLink(user, 'comments');

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
});