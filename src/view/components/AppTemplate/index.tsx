import React, { HTMLAttributes } from 'react'
export interface IAppTemplateProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    childrenWrapperClassName?:string;
}
export default function(props:IAppTemplateProps){
    let {childrenWrapperClassName,...outerAttr} = props;
    return <div {...outerAttr}>
        <div className="w-100 h-100 d-flex flex-column">
            <div className={"flex-grow-1 " + (props.childrenWrapperClassName || "")}>
                {props.children}
            </div>
            <footer className="flex-grow-0">
                <p className="text-center">
                    Copyright © 2017 - 2019 zsh2401,All Rights Reserved
                    <br/>Love Yin For Good</p>
            </footer>
        </div>
    </div>
}