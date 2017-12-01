import React from 'react';
import {withQuery} from 'meteor/cultofcoders:grapher-react';
import query from '/imports/api/users/query/allUsers.js';

class Users extends React.Component {
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
                {data.map(user => <User user={user} key={user._id} onClick={this.props.onSelect} />)}
            </ul>
        )
    }
}

const User = ({user, onClick}) => (
    <li onClick={onClick.bind(this, user._id)}>
        {user.emails[0].address}
    </li>
);

export default withQuery(() => {
    return query.clone()
}, {reactive: true})(Users)
