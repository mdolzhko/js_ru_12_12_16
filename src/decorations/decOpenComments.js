import React from 'react'

export default function openComments(Compo) {
    return class CompoWrapper extends React.Component{

        state = {
            openItem: false
        }

        toggleOpenItem = ev => {
            this.setState({
                openItem: !this.state.openItem
            })
        }

        render(){
            return <Compo
                    {...this.props}
                    {...this.state}
                    toggleOpenItem = {this.toggleOpenItem} />
        }
    }
}
