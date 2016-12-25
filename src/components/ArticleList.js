import React, { Component, PropTypes } from 'react'

import moment from 'moment'
import toggleArticles from '../decorations/decOpenArticle'

import DateFilter from './DateFilter'
import Article from './Article'

class ArticleList extends Component {

        state = {
            startDate: null,
            endDate:null
        }


    startDateFilter = start =>
        this.setState({ startDate: start })

    endDateFilter = end =>
        this.setState({ endDate: end })


    render() {

        const {articles, isOpenItem, toggleOpenItem} = this.props

        const filteredArticles = articles.filter( article => {
                if( !this.state.startDate && !this.state.endDate ) {
                    return true
                }

                if( this.state.startDate &&
                    moment(this.state.startDate).format('L') == moment(article.date).format('L')
                ){
                    return true
                }

                if( this.state.startDate &&
                    this.state.endDate &&
                    moment(this.state.startDate).format('L') <= moment(article.date).format('L') &&
                    moment(this.state.endDate).format('L') >= moment(article.date).format('L')
                ){
                    return true
                }
        })

        const articleElements = filteredArticles.map( article => <li key = {article.id}>

            { moment(article.date).format('L') }
                <Article
                    isOpen={ isOpenItem(article.id)}
                    onClick={toggleOpenItem(article.id)}
                    {...this.props}
                    article={article}
                />
            </li>
        )

        return (
            <div>
                <DateFilter
                    startDateFilter={this.startDateFilter}
                    endDateFilter={this.endDateFilter}/>
                <h2>Article List</h2>
                <ul>
                        {articleElements}
                </ul>
            </div>
        )
    }
}

export default toggleArticles(ArticleList)

Article.PropTypes = {
    articles: PropTypes.object,
    isOpenItem: PropTypes.bool,
    toggleOpenItem: PropTypes.func
}

Article.defaultProps = {
    articles: {},
    isOpenItem: false
}
