import CommentSchema from './schema.js';

const Comments = new Mongo.Collection('comments');
export default Comments;

Comments.attachSchema(CommentSchema);

if (Meteor.isServer) {
    Meteor.publish('comments_autorun', function () {
        // this.disableMergebox();

        return Comments.find();
    });
}

Comments.allow({
    insert: () => true,
    update: () => true,
    remove: () => true
});

Comments.deny({
    insert: () => false,
    update: () => false,
    remove: () => false
});

CommentsCollection = Comments;