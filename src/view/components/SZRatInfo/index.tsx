import React from 'react'
import debugMx from '../../../common/debug-mx'
const highLight: React.CSSProperties = {
  // color: "#3F92D2",
  fontSize:"30px",
  // fontWeight: "bold"
}
export default function () {
  return <div>
    <img className="img-fluid d-block ml-auto mr-auto" style={{width:"100px"}} src={require("../../../app/icon/icon.png")}></img>
    <h4 className="text-center">
      <span style={highLight}>S</span>eymour
      <span style={highLight}> Z</span>hang's
      <span style={highLight}> R</span>eact
      <span style={highLight}> A</span>pplication
      <span style={highLight}> T</span>emplate
    </h4>
    <p className="text-center">
      v{debugMx.SZ_RAT_VERSION}
      <br />by zsh2401
      <br /><a target="_blank" href="https://github.com/zsh2401/sz-rat">View Open Source Repository</a>
    </p>
    <div className="d-flex justify-content-center">
      <img style={{ marginRight: "2px" }} src="http://img.shields.io/travis/zsh2401/sz-rat.svg" />
      <img style={{ marginRight: "2px" }} src="https://img.shields.io/node/v/webpack" />
      <img style={{ marginRight: "2px" }} src="https://img.shields.io/github/languages/code-size/zsh2401/sz-rat" />
      <img style={{ marginRight: "2px" }} src="https://img.shields.io/badge/license-MIT-green" />
    </div>
  </div>
}