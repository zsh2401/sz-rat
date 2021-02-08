import React from 'react'
import ResponsiveRatioWrapper from '../ResponsiveRatioWrapper'
export interface IResponsiveIFrameProps {
    src: string;
}
export default function (props: IResponsiveIFrameProps) {
    return <ResponsiveRatioWrapper>
        {

            <iframe style={
                {
                    height: "100%",
                    width: "100%"
                }
                //@ts-ignore
            } src={props.src} scrolling="no" border="0" frameBorder="no" framespacing="0" allowFullScreen></iframe>
        }
    </ResponsiveRatioWrapper>
}