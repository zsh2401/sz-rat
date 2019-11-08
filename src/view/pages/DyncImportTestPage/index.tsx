import React from 'react'
import { TitleManager } from '../../../common/view-helper'
import girlImg from "./girl.jpg"

export interface AsyncPageState{
    poped:string
}
export default class AsyncPage extends React.Component<any,AsyncPageState>{
    constructor(props){
        super(props);
        this.state = {poped: "None"}
    }
    poped(){
        this.setState({
            poped : TitleManager.pop()
        });
    }
    render(){
        return <div className="container">
            <img src={girlImg}></img>
        </div>
    }
}