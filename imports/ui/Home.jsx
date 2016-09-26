import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <div className="text-center">
                <h1>Welcome to the Boilerplate</h1>

                <h4>Fixtures are loaded from "/imports/startup/server/fixtures.js"</h4>

                <hr/>

                <h4>Sample Query you can use in Grapher Live:</h4>

                <SampleQuery />
            </div>
        )
    }
}

const SampleQuery = () => {
    const query =  `
{
    users: {
        emails: 1,
        comments: {
            $options: {limit: 5},
            text: 1
        },
        posts: {
            $options: {limit: 5},
            title: 1,
            comments: {
                $options: {limit: 5},
                text: 1
            }
        }
    }
}`;

    return <pre style={{textAlign: 'left'}}>{query}</pre>
};
