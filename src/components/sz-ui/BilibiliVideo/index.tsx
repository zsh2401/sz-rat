import React from 'react'
import _ from 'lodash'
export interface BilibiliVideoProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    source:string;
    page?:number;
    ratio?:[number,number]
}
export interface BilibiliVideoState{
    fWidth:number;
    fHeight:number;
}
export default class BilibiliVideo extends React.Component<BilibiliVideoProps,BilibiliVideoState>{
    private readonly w:number;
    constructor(props:BilibiliVideoProps){
        super(props);
        this.state = {fHeight:0,fWidth:0};
        if(props.ratio){
            this.w = props.ratio[1] / props.ratio[0]
        }else{
            this.w = 9 /16;
        }
    }
    private resize(){
        let w = this.mainDiv.clientWidth;
        let h = w * this.w;
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
            this._resizeHandler = _.debounce(()=>this.resize());
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
        return <div ref="mainDiv" {...this.props}>
            {
                //@ts-ignore
                 <iframe style={{height:this.state.fHeight+"px",width:this.state.fWidth+"px"}} src={this.props.source} scrolling="no" border="0" frameBorder="no" framespacing="0" allowFullScreen></iframe>
            }
           
        </div>
    }
}