import React from 'react';
import { createQueryContainer } from 'meteor/cultofcoders:grapher-react';
import query from './query/posts.js';

class Posts extends React.Component {
    render() {
        const {data, loading, error} = this.props;

        if (loading) {
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

export default createQueryContainer(query.clone(), Posts, {
    reactive: true
});