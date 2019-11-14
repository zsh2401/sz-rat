import * as React from 'react';
export interface ITemplateProps {
    title:string;
    description:string;
}
export default function(props: ITemplateProps) {
  return <html lang="zh">
  <head>
      <meta charSet="UTF-8"></meta>
  
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"></meta>
  
      <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
  
      <meta name="description" content={props.description}></meta>
  
      <link rel="manifest" href="manifest.json"></link>
  
      <link rel="apple-touch-icon" sizes="256x256" href={require("!!file-loader!../icon/icon.ico")}></link>
  
      <meta name="apple-mobile-web-app-capable" content="yes"></meta>
  
      <meta name="apple-mobile-web-app-status-bar-style" content="white"/>
  
      <title>{props.title}</title>
  
      <style type="text/css" dangerouslySetInnerHTML={{__html:getStyle()}}></style>

      <script type="text/javascript" dangerouslySetInnerHTML={{__html:getScript()}}></script>
  </head>
  <body>
    <div id="pace" style={{position:"fixed"}}></div>
  <div id="app">
        <div className="__loading-panel-wrapper">
            <div className="__loading-panel-inner">
                <div>
                    <img className="__loading-icon" src={require("../icon/icon.png")}></img>
                </div>
            </div>
        </div>
    </div>
  </body>
  </html>
}
function getScript(){
    return ``;
}
function getStyle(){
    return `
    *{padding: 0px;margin: 0px;}
    html{ width: 100%;height: 100%;}
    body{ width: 100%; height: 100%;}
    #app{height: 100%;width: 100%;}
    .__loading-panel-wrapper{width: 100%;height: 100%;flex-direction: column;display: flex;justify-content: center;}
    .__loading-panel-inner{display: flex;justify-content: center;}
    .__loading-icon{width: 300px;display: block;margin-left: auto;margin-right: auto;}
    `;
}

