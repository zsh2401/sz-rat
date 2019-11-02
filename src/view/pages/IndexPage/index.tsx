import React from 'react'
import { Template,BilibiliVideo } from '../../components/'
export default class IndexPage extends React.Component{
    render(){
        return <div className="safe-area d-flex flex-column bg-dark h-100 text-white">
            <div className="flex-grow-1">start</div>
            <div className="flex-grow-0">end</div>
        </div>
        // return <Template>
        //     <div><h1>Seymour Zhang's React Application Template</h1></div>
        //     <div className="container">
        //         <BilibiliVideo av="73877729" cid="126371320"/>
        //     </div>
        // </Template>
    }
}