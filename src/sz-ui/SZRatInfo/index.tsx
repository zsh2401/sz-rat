import React from 'react'
import DebugMX from "../../common/debug-mx"
//@ts-expect-error
import css from "./index.css"
export default function () {
  return <div className={css.szrat}>
    <div>
      <img src={require("../../../public/icon.png").default}></img>
      <h1 className="text-center">Seymour Zhang's React Application Template</h1>
      <p className="text-center">v{DebugMX.SZ_RAT_VERSION} {DebugMX.SZ_RAT_VNAME}<br />{DebugMX.SZ_RAT_AUTHOR}</p>

      <div className={css["badges-wrapper"]}>
        <img src="http://img.shields.io/travis/zsh2401/sz-rat.svg" />
        <img src="https://img.shields.io/node/v/webpack" />
        <img src="https://img.shields.io/github/languages/code-size/zsh2401/sz-rat" />
        <img src="https://img.shields.io/badge/license-MIT-green" />
      </div>

      <a href="https://github.com/zsh2401/sz-rat">View the repository on Github</a>
    </div>
  </div>
}