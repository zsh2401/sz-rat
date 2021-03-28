import React from 'react'
import { IStdProps } from "sz-react-support"
//@ts-expect-error
import css from "./index.css"
export interface Props extends IStdProps {

}
export default function (props: Props) {
    return <div style={props.style} className={props.className + " " + css.outer}>
        <div className={css.inner}>
            <div>
                {props.children}
            </div>
        </div>
    </div>
}