import React from 'react'
export default function () {
  return <div>
    <img className="img-fluid d-block ml-auto mr-auto" src={require("../../../public/icon.png")}></img>
    <h3 className="text-center">Seymour Zhang's React Application Template</h3>
    <p className="text-center">v{require("../../../../package.json")["sz-rat"].version} <br />by zsh2401</p>
    <div className="d-flex justify-content-center" style={{ maxWidth: '500px' }}>
      <img src="http://img.shields.io/travis/zsh2401/sz-rat.svg" />
      <img src="https://img.shields.io/node/v/webpack" />
      <img src="https://img.shields.io/github/languages/code-size/zsh2401/sz-rat" />
      <img src="https://img.shields.io/badge/license-MIT-green" />
    </div>
  </div>
}