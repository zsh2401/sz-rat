import React from 'react'
import debugMx from '../../../common/debug-mx'
export default function(){
    return <div>
    <img className="img-fluid d-block ml-auto mr-auto" src={require("../../../app/icon/icon.png")}></img>
    <h3 className="text-center">Seymour Zhang's React Application Template</h3>
    <p className="text-center">
      v{debugMx.SZ_RAT_VERSION} 
      <br/>by zsh2401
      <br/><a target="_blank" href="https://github.com/zsh2401/sz-rat">View Open Source Repository</a>
    </p>
    <div className="d-flex justify-content-center">
      <img style={{marginRight:"2px"}} src="http://img.shields.io/travis/zsh2401/sz-rat.svg"/>
      <img style={{marginRight:"2px"}} src="https://img.shields.io/node/v/webpack"/>
      <img style={{marginRight:"2px"}} src="https://img.shields.io/github/languages/code-size/zsh2401/sz-rat"/>
      <img style={{marginRight:"2px"}} src="https://img.shields.io/badge/license-MIT-green"/>
    </div>
</div>
}