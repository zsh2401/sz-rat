import React, { HTMLAttributes } from 'react'
import DebugMx from '../../../common/sz-support/debug-mx'
import IStdProps from '../../../common/sz-support/IStdProps'
export default function (props: IStdProps) {
    return <div>
        <div className="w-100 h-100 d-flex flex-column">
            <div className={"flex-grow-0 container"}>
                <h2> {DebugMx.NAME}</h2>
                <p>{DebugMx.DESC}</p>
            </div>

            <div className={"flex-grow-1 container"}>
                {props.children}
            </div>

            <footer className="flex-grow-0">
                <p className="text-center">
                    Copyright © 2019 - {new Date().getFullYear()} {DebugMx.AUTHOR},All Rights Reserved
                </p>
            </footer>
        </div>
    </div>
}