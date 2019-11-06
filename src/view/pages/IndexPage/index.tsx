import React from 'react'
import { Template,BilibiliVideo } from '../../components/'
import { TitleManager } from '../../../common/dom-helper'
import idManager from '../../../common/id-manager'
export interface IndexPageState{
    poped:string
}
export default class IndexPage extends React.Component<any,IndexPageState>{
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
        // return <div className="safe-area d-flex flex-column bg-dark h-100 text-white">
        //     <div className="flex-grow-1">start</div>
        //     <div className="flex-grow-0">end</div>
        // </div>
        return <Template>
            <div><h1>Seymour Zhang's React Application Template</h1></div>
            <div className="container">
                {/* <BilibiliVideo av="73877729" cid="126371320"/> */}
                <button onClick={()=>TitleManager.push(idManager.allocate())}>
                    Push
                </button>
                <button onClick={this.poped.bind(this)}>
                    POP : {this.state.poped}
                </button>
            </div>
        </Template>
    }
}