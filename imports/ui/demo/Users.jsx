import React from 'react';
import { createQueryContainer } from 'meteor/cultofcoders:grapher-react';
import query from '/imports/api/users/query/allUsers.js';

class Users extends React.Component {
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

export default createQueryContainer(query.clone(), Users, {
    reactive: true
});