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
    constructor(props){
        super(props);
        this.state = {fHeight:0,fWidth:0};
    }
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
    private get resizeHandler(){
        if(!this._resizeHandler){
            this._resizeHandler = _.debounce(this.resize.bind(this));
        }
        return this._resizeHandler;
    }
    private _resizeHandler:()=>void;
    componentDidMount(){
        this.resize();
        window.addEventListener('resize',this.resizeHandler);
    }
    componentWillUnmount(){
        window.removeEventListener('resize',this.resizeHandler);
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