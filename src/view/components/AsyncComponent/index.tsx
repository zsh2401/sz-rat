import React from 'react'
import { Module } from 'webpack';
import DefaultLoadingView from './DefaultLoadingView';
export interface AsyncComponentProps{
    onLoading?:()=>void;
    onLoaded?:()=>void;
    onError?:(err:any)=>void;

    loader?:()=>Promise<any>;
    timeout?:number;
    modulePath?:string;

    loadingView?:React.ReactType;
}
export interface AsyncComponentState{
    component:React.ReactType;
}
export default class AsyncComponent extends React.Component<AsyncComponentProps,AsyncComponentState>{
    constructor(props:AsyncComponentProps){
        super(props);
        this.state = {
            component:this.props.loadingView || DefaultLoadingView
        }
    }
    componentDidMount(){
        if(this.props.loader){
            this.loadAsync(this.props.loader);
        }else if(this.props.modulePath){
            this.loadAsync(()=>import(this.props.modulePath as string));
        }else{
            this.props.onError && this.props.onError("There is no any target to load!");
        }
    }
    private async loadAsync(loader:()=>Promise<any>){
        try{
            this.props.onLoading && this.props.onLoading();

            let componentType = (await loader()).default;
            await this.updateUI(componentType);

            this.props.onLoaded && this.props.onLoaded();
        }catch(err){
            this.props.onError && this.props.onError(err)
        }
    }
    private updateUI(componentType:React.ReactType):Promise<any>{
        let that = this;
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                try{
                    that.setState({
                        component:componentType
                    });
                    resolve();
                }catch(err){
                    reject(err);
                }
            },this.props.timeout || 1)
        });
    }
    render(){
        let Component = this.state.component;
        return <Component/>;
    }
}