import React from "react"
import { IStdProps } from "sz-react-support";
import debugMx from "../../../common/debug-mx";
export default function (props: IStdProps) {
    return <header className={props.className}>
        <a href="https://github.com/zsh2401/sz-rat/blob/master/src/view/components/Layout/Header.tsx" target="_blank">
            src/view/components/Layout/Header.tsx
        </a>

        <h2> {debugMx.NAME}</h2>
        <p>{debugMx.DESC}</p>
    </header>
}