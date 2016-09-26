import React from 'react';
import commentsQuery from './query/posts.js';
import { createQueryContainer } from 'meteor/cultofcoders:grapher-react';
import Pagination from "react-js-pagination";

const PostsList = ({data, loading, error}) => {
    if (loading) {
        return <div>Loading</div>
    }

    if (error) {
        return <div>Error: {error.reason}</div>
    }

    return (
        <ul>
            {
                _.map(data, post => {
                    return <li key={post._id}>{post.title}</li>
                })
            }
        </ul>
    )
};

const PostsListContainer = createQueryContainer(commentsQuery, PostsList);

export default class Wrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            page: parseInt(FlowRouter.getParam('page')) || 1,
            perPage: 10,
            total: 0
        };
    }

    componentDidMount() {
        this.handlePageChange(this.state.page);
    }

    render() {
        const pageParams = {
            limit: this.state.perPage,
            skip: this.state.perPage * (this.state.page - 1)
        };

        return (
            <div>
                <h1>Posts - Page {this.state.page}</h1>

                <PostsListContainer params={pageParams} />

                <Pagination
                    activePage={this.state.page}
                    itemsCountPerPage={this.state.perPage}
                    totalItemsCount={this.state.total}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)}
                />
            </div>
        )
    }

    handlePageChange(page) {
        this.setState({page});

        FlowRouter.setParams({page});

        commentsQuery.getCount((err, res) => {
            console.log(res);

            this.setState({total: res});
        })
    }
}