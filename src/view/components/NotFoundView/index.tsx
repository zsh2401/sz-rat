import React from 'react'
//@ts-ignore
import styles from './index.css'
export default class NotFoundView extends React.Component{
    render(){
        return <div className="container">
            <img className="img-fluid d-block ml-auto mr-auto" src={require("../../../assets/public/icon.png")}></img>
            <h3 className="text-center">Seymour Zhang's React Application Template</h3>
            <h1 className="text-center">404 NOT FOUND!</h1>
        </div>
    }
}