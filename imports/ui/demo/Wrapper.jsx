import React from 'react';
import Users from './Users.jsx';
import Posts from './Posts.jsx';
import PostComments from './PostComments.jsx';

export default class Wrapper extends React.Component {
    constructor() {
        super();

        this.state = {
            selectedUser: null,
            selectedPost: null
        }
    }

    render() {
        const columnStyle = {width: '33%', float: 'left'};

        return (
            <div>
                <p>
                    This is currently reactive you can modify reactivity by going in "/imports/ui/demo/Users.jsx"
                    and use <strong>reactive: false</strong> to your queries
                </p>
                <div style={columnStyle}>
                    <h1>Users</h1>
                    <Users onSelect={this.onSelectUser.bind(this)} />
                </div>
                <div style={columnStyle}>
                    <h1>Posts</h1>
                    {this.state.selectedUser
                        ? <Posts onSelect={this.onSelectPost.bind(this)} ownerId={this.state.selectedUser} />
                        : <div>Select a user first</div>
                    }
                </div>
                <div style={columnStyle}>
                    <h1>Comments</h1>

                    {this.state.selectedPost
                        ? <PostComments postId={this.state.selectedPost} />
                        : <div>Select a post first</div>
                    }
                </div>
            </div>
        )
    }

    onSelectUser(userId) {
        this.setState({selectedUser: userId});
        this.setState({selectedPost: null})
    }

    onSelectPost(postId) {
        this.setState({selectedPost: postId})
    }
}