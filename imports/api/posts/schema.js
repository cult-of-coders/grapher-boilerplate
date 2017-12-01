import SimpleSchema from 'simpl-schema';
export default new SimpleSchema({
    title: {
        type: String
    },
    ownerId: {
        type: String,
        optional: true,
    },
    tagIds: {
        type: Array,
        optional: true,
    },
    'tagIds.$': {
        type: String,
    },
    groupLink: {
        type: Object,
        blackbox: true,
        optional: true
    }
})