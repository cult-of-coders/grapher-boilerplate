import React from 'react';
import {withQuery} from 'meteor/cultofcoders:grapher-react';
import query from '/imports/api/posts/query/postComments.js';

class Comments extends React.Component {
    render() {
        const {data, isLoading, error} = this.props;

        if (isLoading) {
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

export default withQuery(({postId}) => query.clone({_id: postId}), {
    reactive: true,
    single: true
})(Comments)
