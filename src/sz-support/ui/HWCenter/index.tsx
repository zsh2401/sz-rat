import React from 'react'
//@ts-expect-error
import css from "./index.css"
export default function (props: React.Props<any>) {
    return <div className={css.outer}>
        <div className={css.inner}>
            <div>
                {props.children}
            </div>
        </div>
    </div>
}