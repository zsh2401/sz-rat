import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import EnvLoader from './env-loader/'

import OfflinePluginRuntime from 'offline-plugin/runtime'
import debugMx from '../common/debug-mx';
//install service worker if it's dev env
if(!debugMx.IS_DEV){
    console.log("Installing sw.js")
    OfflinePluginRuntime.install();
    console.log("Installed sw.js")
}

renderLaunchView();
loadApp();

function renderLaunchView(){
    ReactDOM.render(React.createElement(LaunchView),document.querySelector("#app"));
}

async function loadApp(){
    await EnvLoader.load("bootstrap");
    if(/#[\/]?$/.test(window.location.hash)){
        console.log("is index page");
        await wait(1000);
    }
    await import(/*webpackChunkName:"real-app"*/"./App");
}
const wait = (ms:number)=>new Promise(resolve=>setTimeout(resolve,ms));

//remember,there is only react and react-dom has been loaded
function LaunchView(){
    return (<div style={{height:"100%",width:"100%",display:"flex",flexDirection:"row",justifyContent:"center",backgroundColor:"whitesmoke"}}>
        <div style={{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <div>
                <h1>SZ-RAT</h1>
                <p style={{textAlign:"center"}}>{require("../../package.json").version}
                    <br/><br/>
                </p>
            </div>
        </div>
      </div>
    );
}
