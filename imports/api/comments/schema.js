import SimpleSchema from 'simpl-schema';
export default new SimpleSchema({
    text: {
        type: String
    },
    postId: {
        type: String,
        optional: true,
    },
    userId: {
        type: String,
        optional: true,
    }
});