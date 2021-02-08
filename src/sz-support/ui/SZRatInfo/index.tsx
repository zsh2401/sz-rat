import React from 'react'
import DebugMX from "../../../common/debug-mx"
//@ts-expect-error
import css from "./index.css"
export default function () {
  const version = require("../../../../package.json")["sz_rat"].version;
  return <div className={css.szrat}>
    <div>
    <img src={require("../../../../public/icon.png").default}></img>
    <h3 className="text-center">Seymour Zhang's React Application Template</h3>
    <p className="text-center">v{DebugMX.SZ_RAT_VERSION} {DebugMX.SZ_RAT_VNAME}<br />{DebugMX.SZ_RAT_AUTHOR}</p>
    <div style={{ maxWidth: '500px' }}>
      <img src="http://img.shields.io/travis/zsh2401/sz-rat.svg" />
      <img src="https://img.shields.io/node/v/webpack" />
      <img src="https://img.shields.io/github/languages/code-size/zsh2401/sz-rat" />
      <img src="https://img.shields.io/badge/license-MIT-green" />
    </div>
    </div>
  </div>
}