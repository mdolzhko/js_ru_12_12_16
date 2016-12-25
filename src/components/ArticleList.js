import React, { Component, PropTypes } from 'react'

import moment from 'moment'
import toggleArticles from '../decorations/decOpenArticle'

import DateFilter from './DateFilter'
import Article from './Article'

class ArticleList extends Component {

    constructor(props){
        super(props);

        this.state = {
            startDate: null,
            endDate:null
        }

        this.startDateFilter = this.startDateFilter.bind(this);
        this.endDateFilter = this.endDateFilter.bind(this);
    }

    startDateFilter( start ){
        this.setState({ startDate: start })
    }
    endDateFilter( end ){
        this.setState({ endDate: end })
    }

    render() {

        const {articles, isOpenItem, toggleOpenItem} = this.props

        const filterdArticles = articles.filter( article => {
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

        const articleElements = filterdArticles.map( article => <li key = {article.id}>

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
    articles: PropTypes.object
}

Article.defaultProps = {
    articles: {}
}
