import React from 'react'
import { Template } from '../../components/Template'
import BilibiliVideo from '../../components/BilibiliVideo';
export default class IndexPage extends React.Component{
    render(){
        return <Template>
            <div><h1>Seymour Zhang's React Application Template</h1></div>
            <div className="container">
                <BilibiliVideo av="73877729" cid="126371320"/>
            </div>
        </Template>
    }
}