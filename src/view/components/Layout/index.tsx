import React from 'react'
import { IStdProps } from 'sz-react-support'
import Header from "./Header"
import Footer from "./Footer"
//@ts-expect-error
import css from "./index.css"
import AppContext, { IAppContext } from '../../../AppContext'
export default function (props: IStdProps) {
    return <div>
        <div className={css.layout}>

            <AppContext.Consumer>
                {(context: IAppContext) =>
                    <>
                        {context.navbarVisible && <Header className={css.header} />}

                        <div className={css.body}>
                            {props.children}
                        </div>

                        {context.footbarVisible && <Footer className={css.footer} />}

                    </>
                }
            </AppContext.Consumer>

        </div>
    </div>
}