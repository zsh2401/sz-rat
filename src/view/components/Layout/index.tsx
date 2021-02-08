import React from 'react'
import DebugMx from '../../../common/debug-mx'
import IStdProps from '../../../sz-support/common/IStdProps'
//@ts-expect-error
import css from "./index.css"
export default function (props: IStdProps) {
    return <div>
        <div className={css.layout}>
            <div className={css.header}>
                There's Header
                <h2> {DebugMx.NAME}</h2>
                <p>{DebugMx.DESC}</p>
            </div>

            <div className={css.body}>
                {props.children}
            </div>

            <footer className={css.footer}>
                There's Footer
                <p>
                    Copyright © 2019 - {new Date().getFullYear()} {DebugMx.AUTHOR},All Rights Reserved
                </p>
            </footer>
        </div>
    </div>
}