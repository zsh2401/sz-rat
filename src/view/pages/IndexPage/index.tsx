import React from 'react'
import { Template, LodableComponent } from '../../components'
import { TitleManager } from '../../../common/view-helper'
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
                
                <LodableComponent loader={()=>import("../DyncImportTestPage")} delay={4000}/>
            </div>
        </Template>
    }
}
function Holder(props){
    return <div>{props.loadableStatus}-{props.loadableError}</div>
}