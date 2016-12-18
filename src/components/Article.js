import React, { Component } from 'react'
import Comments from './Comments'


export default class Article extends Component {
    /*
     constructor() {
     super()
     this.state = {
     isOpen: false
     }
     }
     */
    state = { isOpen: false }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getBody( article ) {
        if (!this.state.isOpen) return null
        return (
            <section>
                { this.props.article.text }
                <Comments
                    articleId = { article.id }
                    articleComments = { article.comments }/>
            </section>
        )
    }

    render() {
        const { article } = this.props
        return (
            <div>
                <h3 style={{ cursor: 'pointer' }}
                    onClick = {this.toggleOpen} >

                    { article.title }
                </h3>
                <div>
                    { this.getBody( article ) }
                </div>
            </div>
        )
    }
}