import React from 'react'

export default function toggleArticles(Compo) {
    return class CompoWrapper extends React.Component{

        state = {
            openItemId: false
        }

        isOpen = id => this.state.openItemId == id

        toggleOpenItem = id => ev => {
            this.setState({
                openItemId: this.state.openItemId == id ? null : id
            })
        }

        render(){
            return <Compo
                    {...this.props}
                    isOpenItem = {this.isOpen}
                    toggleOpenItem = {this.toggleOpenItem} />
        }
    }
}
