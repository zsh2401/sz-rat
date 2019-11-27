import React from 'react'
import StdProps from '../../../common/srd-props'
export default function NavBar(props: StdProps) {
    let { children, ...attr } = props;
    return <div {...attr}>
        NavBar
    </div>
}