const APP_ID = "";
const APP_KEY = "";
const PLACE_HOLDER = "说点什么吧!";



import React from 'react'
import { IDManager } from "../../index"
//@ts-ignore
// import AV from "leancloud-storage"
//@ts-ignore
// import Valine from 'valine'
export interface ValineCommentProps {
    path?: string;
}
export default class ValineComment extends React.Component<ValineCommentProps>{
    private id = IDManager.allocate();
    componentDidMount() {
        //@ts-ignore
        new Valine({
            el: "#" + this.id,
            appId: APP_ID,
            appKey: APP_KEY,
            path: this.props.path || null,
            placeholder: PLACE_HOLDER,
            visitor: true
        });
    }
    render() {
        return <div id={this.id}></div>
    }
    componentWillUnmount() {
        IDManager.free(this.id)
    }
}