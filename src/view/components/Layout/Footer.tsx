import React from "react"
import { IStdProps } from "sz-react-support";
import debugMx from "../../../common/debug-mx";
export default function (props: IStdProps) {
    return <footer className={props.className}>
        There's the footer
                <p>
            Copyright © 2019 - {new Date().getFullYear()} {debugMx.AUTHOR},All Rights Reserved
                </p>
    </footer>
}