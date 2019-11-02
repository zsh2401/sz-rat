import React from 'react'
import idm from '../../common/id-manager'
//@ts-ignore
import AV from "leancloud-storage"
//@ts-ignore
import Valine from 'valine'
const APP_ID = "";
const APP_KEY = "";
const PLACE_HOLDER = "说点什么吧!";
export interface ValineCommentProps{
    path?:string;
}
export default class ValineComment extends React.Component<ValineCommentProps>{
    private id = idm.allocate();
    componentDidMount(){
        new Valine({
            el:"#" + this.id,
            appId:APP_ID,
            appKey:APP_KEY,
            path:this.props.path || null,
            placeholder:PLACE_HOLDER,
            visitor:true
        });
    }
    render(){
        return <div id={this.id}></div>
    }
    componentWillUnmount(){
        idm.free(this.id)
    }
}