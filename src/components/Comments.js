import React, { Component } from 'react'

export default class Comments extends Component {

    state = {
        isOpen: false
    }

    toggleComments = (e) => {
        e.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


    render (){
        if (!this.state.isOpen){
            return (
                <h4>
                    <a href="#" onClick={this.toggleComments}  >
                        Show Comments
                    </a>
                </h4>
                )
        } else {
            return (
                <div>
                    <h4>
                        <a href="#" onClick={this.toggleComments}>
                            Hide Comments
                        </a>
                    </h4>
                <textarea
                    name="comment-area"
                    placeholder="Write something here"
                    style={{
                        display: 'block',
                        width: '100%',
                        height:'5em' ,
                        border: '1px solid #eee'
                    }}/>
                </div>
            )
        }

    }
}