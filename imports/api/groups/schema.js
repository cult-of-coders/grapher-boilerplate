import SimpleSchema from 'simpl-schema';
export default new SimpleSchema({
    name: {
        type: String
    },

    memberIds: {
        type: Array,
        optional: true,
    },
    'memberIds.$': {
        type: String,
    },

    ownerId: {
        type: String,
        optional: true,
    }
});