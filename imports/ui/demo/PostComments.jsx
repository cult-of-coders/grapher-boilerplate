import React from 'react';
import { createQueryContainer } from 'meteor/cultofcoders:grapher-react';
import query from './query/postComments.js';
import CommentsCollection from '/imports/api/comments/collection.js';

class Comments extends React.Component {
    render() {
        const {data, loading, error} = this.props;

        if (loading) {
            return <div>Loading</div>
        }

        if (error) {
            return <div>Error: {error.reason}</div>
        }

        const comments = data.comments;

        return (
            <ul>
                {comments.map(comment => <Comment comment={comment} key={comment._id} />)}
            </ul>
        )
    }
}

const Comment = ({comment}) => {
    return <li>{comment.text} - by {comment.user.emails[0].address}</li>
};

export default createQueryContainer(query, Comments, {
    reactive: true,
    single: true // we use this because we expect one object. a post, that contains the comments.
});