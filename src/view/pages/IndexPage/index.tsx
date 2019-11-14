import * as React from 'react';
import { Template } from '../../components';
import Pace from '../../components/Pace'
export interface IIndexPageProps {

}

export interface IIndexPageState {
  loadingProgerss:number;
}

export default class IndexPage extends React.Component<IIndexPageProps, IIndexPageState> {
  constructor(props: IIndexPageProps) {
    super(props);

    this.state = {
      loadingProgerss:30
    }
  }

  public render() {
    return (
      <Template>
          <Pace progress={30}/>
          <div className="container">
              <img className="img-fluid d-block ml-auto mr-auto" src={require("../../../app/icon/icon.png")}></img>
              <h3 className="text-center">Seymour Zhang's React Application Template</h3>
              <p className="text-center">v{require("../../../../package.json").version} <br/>by zsh2401</p>
              <button onClick={()=>{
                this.setState({loadingProgerss:this.state.loadingProgerss+10});
                console.log(this.state.loadingProgerss)
              }}>WWW</button>
              <div className="mr-auto ml-auto" style={{maxWidth:'500px'}}>
                <img src="http://img.shields.io/travis/zsh2401/sz-rat.svg"/>
                <img src="https://img.shields.io/node/v/webpack"/>
                <img src="https://img.shields.io/github/languages/code-size/zsh2401/sz-rat"/>
                <img src="https://img.shields.io/badge/license-MIT-green"/>
                <img src="https://img.shields.io/github/package-json/v/zsh2401/sz-rat"/>
              </div>
          </div>
      </Template>
    );
  }
}
