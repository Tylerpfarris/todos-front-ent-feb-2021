import React, { Component } from 'react'

export default class TodosListPage extends Component {
    render() {
        return (
            <div>
                {JSON.stringify(this.props.user)}
                todos list page
            </div>
        )
    }
}
