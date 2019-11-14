    import * as React from 'react';
    import "./pace.css"
    export interface IPaceBarProps {
        fixed?:boolean;
        progress:number;
        className?:string;
        innerClassName?:string;
    }

    export interface IPaceBarState {
        progress:number;
        visibility:"visible" | "hidden";
    }

    export default class PaceBar extends React.Component<IPaceBarProps, IPaceBarState> {
    constructor(props: IPaceBarProps) {
        super(props);
        this.state = {
            progress:0,
            visibility:"visible"
        }
    }
    componentDidMount(){
        this.playNextFrame();
    }
    private playNextFrame(){
        if(this.state.progress === this.props.progress){
            this.onAnimationFinished();
        }else{
            this.setState({
                progress:this.state.progress + 1
            });
            requestAnimationFrame(this.playNextFrame.bind(this));
        }
    }
    private onAnimationFinished(){
        if(this.state.progress >= 100 
            && this.state.progress <= 100){
                this.hide();
        }
    }
    private hide(){
        this.setState({
            visibility:"hidden"
        });
    }
    private display(){
        this.setState({
            visibility:"visible"
        });
    }
    public render() {
        return (
        <div className={"pace-wrapper " + (this.props.className || "")} 
                style={{visibility:this.state.visibility, position: this.props.fixed ? "fixed" : undefined}}>
            <div className={"pace-inner " + (this.props.innerClassName || "")}
                style={{width:this.state.progress + "%"}}
            ></div>
        </div>
        );
    }
}
