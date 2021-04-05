import React from "react"
import { IStdProps } from "sz-react-support";
import debugMx from "../../../common/debug-mx";
export default function (props: IStdProps) {
    return <footer className={props.className}>
        <a href="https://github.com/zsh2401/sz-rat/blob/master/src/view/components/Layout/Footer.tsx" target="_blank">
            src/view/components/Layout/Footer.tsx
        </a>
        <p style={{ fontSize: "12px" }}>
            Copyright © 2019 - {new Date().getFullYear()} {debugMx.AUTHOR},All Rights Reserved
                </p>
    </footer>
}