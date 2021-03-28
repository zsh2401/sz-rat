const APP_ID = "";
const APP_KEY = "";
const PLACE_HOLDER = "说点什么吧!";

import React, { useEffect } from 'react'
import { useId } from "sz-react-support"
export interface ValineCommentProps {
    path?: string;
}
export default function (props: ValineCommentProps) {
    const id = useId()
    useEffect(() => {
        //@ts-ignore
        const valine = new Valine({
            el: "#" + this.id,
            appId: APP_ID,
            appKey: APP_KEY,
            path: this.props.path || null,
            placeholder: PLACE_HOLDER,
            visitor: true
        });
    })
    return <div id={id}></div>
}