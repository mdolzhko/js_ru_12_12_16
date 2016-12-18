import React from 'react'
import ReactDOM from 'react-dom'
import { normalizedArticles as articles } from './fixtures'

import ArticleList from './components/ArticleList'

ReactDOM.render(
    <ArticleList articles = {articles} />,
    document.getElementById('container')
)