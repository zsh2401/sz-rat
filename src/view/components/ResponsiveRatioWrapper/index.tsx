import React, { useEffect, useState } from 'react'
import { type } from 'os'
import { useEffectOnce } from 'react-use'
import _ from 'lodash'
export interface ResponsiveRatioWrapperProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    ratio?:[number,number];
}
export default function(props:ResponsiveRatioWrapperProps){ 
    let [height,heightSetter] = useState(0);
    useEffectOnce(()=>{
        // window.addEventListener("resize",)
    });

    return <div className="w-100" style={{height:height}}>
        {props.children}
    </div>
}