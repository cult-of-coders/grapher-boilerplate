import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to the Boilerplate</h1>

                <h2>Fixtures are loaded from "/imports/startup/server/fixtures.js"</h2>

                <h2>Sample Query you can use in Grapher Live</h2>

                <SampleQuery />
            </div>
        )
    }
}

const SampleQuery = () => {
    const query =  `
{
    users: {
        $all: true,
            comments: {
            $options: {limit: 5},
            text: 1
        },
        posts: {
            $options: {limit: 5},
            $all: true,
                comments: {
                $options: {limit: 5},
                text: 1
            }
        }
    }
}`;

    return <pre>{query}</pre>
};
