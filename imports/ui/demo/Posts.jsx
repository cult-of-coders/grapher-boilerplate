import React from 'react';
import {withQuery} from 'meteor/cultofcoders:grapher-react';
import query from '/imports/api/posts/query/postsByOwner.js';

class Posts extends React.Component {
    render() {
        const {data, isLoading, error} = this.props;

        if (isLoading) {
            return <div>Loading</div>
        }

        if (error) {
            return <div>Error: {error.reason}</div>
        }

        return (
            <ul>
                {
                    data.map(post => <Post post={post} key={post._id} onClick={this.props.onSelect} />)
                }
            </ul>
        )
    }
}

const Post = ({post, onClick}) => (
    <li onClick={onClick.bind(this, post._id)}>
        {post.title}
    </li>
);

export default withQuery(({ownerId}) => {
    return query.clone({ownerId})
}, {reactive: true})(Posts)