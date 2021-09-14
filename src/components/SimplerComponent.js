import React from 'react' 


export default class SimplerComponent extends React.Component {
    render() {
        return(
        <div onClick={() => this.props.handleClick()}>
            I am just happy
        </div>)
    }
}