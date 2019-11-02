import React from 'react'
import _ from 'lodash'
export interface BilibiliVideoProps{
    av:string;
    cid:string;
    page?:number;
}
export interface BilibiliVideoState{
    fWidth:number;
    fHeight:number;
}
export default class BilibiliVideo extends React.Component<BilibiliVideoProps,BilibiliVideoState>{
    private observer:MutationObserver;
    private resize(){
        let w = this.mainDiv.clientWidth;
        let h = w * 0.66;
        this.setState({
            fWidth:w,
            fHeight:h
        });
    }
    private get mainDiv():HTMLDivElement{
        return this.refs.mainDiv as HTMLDivElement;
    }
    componentWillMount(){
        this.state = {fHeight:0,fWidth:0};
    }
    componentDidMount(){
        this.resize();
        this.observer = new MutationObserver(_.debounce(this.resize.bind(this)));
        this.observer.observe(this.mainDiv);
    }
    componentWillUnmount(){
        this.observer.disconnect();
    }
    render(){
        let src = `//player.bilibili.com/player.html?aid=${this.props.av}&cid=${this.props.cid}&page=${this.props.page || 1}`;
        //@ts-ignore
        return <div ref="mainDiv" className="w-100"><iframe
            style={{height:this.state.fHeight+"px",width:this.state.fWidth+"px"}}
            src={src}
            scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
        </div>
    }
}