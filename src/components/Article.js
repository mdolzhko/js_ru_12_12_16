import React, { Component, PropTypes } from 'react'
import Comments from './Comments'

import CSSTransition from 'react-addons-css-transition-group'
import './Article.css'

export default class Article extends Component {

    getBody( article ) {
        return (
            <section>
                { article.text }
                { <Comments articleComments={article.comments} /> }
            </section>
        )
    }

    render() {

        const { article, onClick, isOpen } = this.props

        return (
            <div>
                <h3 style={{ cursor: 'pointer' }}
                    onClick={onClick}>

                     {article.title}
                </h3>
                <CSSTransition
                    transitionName="article-body"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500} >
                    { isOpen &&
                        this.getBody( article ) }
                </CSSTransition>
            </div>
        )
    }
}

Article.PropTypes = {
    article: PropTypes.object,
    onClick: PropTypes.func,
    isOpen: PropTypes.bool
}

Article.defaultProps = {
    isOpen: false,
    article: {}
}
