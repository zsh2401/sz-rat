import React, { HTMLAttributes } from 'react'
export interface ILayoutProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    childrenWrapperClassName?:string;
    navbar?:boolean;
    footer?:boolean;
    std?:boolean;
    container?:boolean;
}
export default function(props:ILayoutProps){
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