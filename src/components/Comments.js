import React, { Component, PropTypes } from 'react'
import openComments from '../decorations/decOpenComments'
import { normalizedComments as allComments } from '../fixtures'

class Comments extends Component {

    /**
     *  Article comment List builder:
     *
     *  - map all comments and compare ids
     *
     *  - filter array with null values
     *
     *  - map filtered object and create comment list
     * */
    commentsList(articleComments){

        let filtered = allComments
            .map( comment =>
                    articleComments.indexOf(comment.id) > -1
                        ? comment
                        : null)
            .filter( item => item !== null )


        return filtered.map( comment =>
            <li key={ comment.id }
                style={{ borderBottom: '1px solid #eee', padding: '1em 0' }}>
                <h4>{comment.user}:</h4>
                <div>{comment.text}</div>
            </li> )

    }

    buttonShowComments(){
        return(
            <a href="#" onClick={this.props.toggleOpenItem} >
                { this.props.openItem
                    ? 'Hide' : 'Show' } comments
            </a>        )
    }

    commentsArea(){
        return(
            <textarea
                name="comment-area"
                placeholder="Write Your Comment Here"
                style={{ display: 'block', width: '100%', height:'5em' , border: '1px solid #eee'}}/>
        )
    }

    render (){

        const { articleComments, openItem } = this.props
        const btnShowHide = Object.keys(articleComments).length > 0
                ? this.buttonShowComments(  )
                : 'Any thoughts about? leave them below'

        return (
                <div>
                    <h4>{ btnShowHide }</h4>
                    { this.commentsArea() }
                    <ul>
                        { openItem
                            ? this.commentsList(articleComments)
                            : null
                        }
                    </ul>
                </div>
            )
        }
}

Comments.PropTypes = {
       articleComments: PropTypes.object,
       toggleOpenItem: PropTypes.func,
       openItem: PropTypes.bool
}

Comments.defaultProps = {
    articleComments: {},
    openItem: false
}

export default openComments(Comments)
