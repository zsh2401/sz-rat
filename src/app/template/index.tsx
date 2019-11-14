import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Template from './Template'
import pkgInfo from '../../../package.json'
export default function render(){
    return ReactDOMServer.renderToString(<Template 
        title={pkgInfo.name} description={pkgInfo.description}/>);
}
