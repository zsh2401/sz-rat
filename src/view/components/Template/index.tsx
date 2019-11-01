import React from 'react'
export class Template extends React.Component{
    render(){
        return <div>
            {this.props.children}
        </div>
    }
}