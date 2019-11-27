import React from 'react'
import StdProps from '../../../common/srd-props'
export default function Footer(props:StdProps){
    let {children,...attr} = props;
    return <div {...attr}>FOOTER</div>
}