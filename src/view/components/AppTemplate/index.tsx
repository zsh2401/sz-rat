import React, { HTMLAttributes } from 'react'
import debugMx from '../../../common/debug-mx';
import StdProps from '../../../common/srd-props';
import NavBar from '../NavBar';
import Footer from '../Footer';
export interface IAppTemplateProps extends StdProps {
    navbar?: boolean;
    footer?: boolean;
    responsiveContainer?: boolean;
}
const DEFAULT_OUTER_CLASS_NAME = "h-100 w-100 d-flex flex-column";
export default function (props: IAppTemplateProps) {
    const { navbar, footer, responsiveContainer, className, children, ...attr } = props;
    const outerClassName = `${DEFAULT_OUTER_CLASS_NAME} ${className}`
    const containerClassName = responsiveContainer ? "container" : null;

    return <div className={outerClassName} {...attr}>
        {navbar ? <NavBar className="flex-grow-0" /> : null}

        <div className={`flex-grow-1 d-flex flex-column align-items-stretch ${containerClassName}`}>{children}</div>

        {navbar ? <Footer className="flex-grow-0" /> : null}
    </div>
}