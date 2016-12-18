import React, { Component } from 'react'
import { normalizedComments as allComments } from '../fixtures'

export default class Comments extends Component {

    state = { isOpen: false }

    toggleComments = (e) => {
        e.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    /**
     *  Article comment List builder:
     *
     *  - map all comments and compare ids
     *
     *  - filter array with null values
     *
     *  - map filtered object and create comment list
     * */
    commentsList(){

        let filtered = allComments
            .map( comment =>
                this.props.articleComments.indexOf(comment.id) > -1
                    ? comment : null )
            .filter( item => item !== null )

        if (!this.state.isOpen) return null

        return filtered.map( comment =>
            <li key={this.props.articleId + comment.id }
                style={{ borderBottom: '1px solid #eee', padding: '1em 0' }}>
                <h4>{comment.user}:</h4>
                <div>{comment.text}</div>
            </li> )

    }

    render (){

        const textArea = <textarea
            name="comment-area"
            placeholder="Write Your Comment Here"
            style={{ display: 'block', width: '100%', height:'5em' , border: '1px solid #eee'}}/>

        const btnShowHide = this.props.articleComments.length > 0
                ? <a href="#" onClick={this.toggleComments}>
                    { this.state.isOpen
                        ? 'Hide' : 'Show' } comments
                  </a>

                : 'Any thoughts about? leave them below'

        return (
                <div>
                    <h4>{ btnShowHide }</h4>
                    { textArea }
                    <ul>
                        { this.commentsList() }
                    </ul>
                </div>
            )
        }
}