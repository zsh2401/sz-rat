import React, { useContext, useState, Dispatch, SetStateAction } from "react"
import { History, createHashHistory } from 'history'
export interface IAppContext {
    navbarVisible: boolean
    footbarVisible: boolean
    readonly history: History
}
//@ts-expect-error
const context: React.Context<IAppContext> = React.createContext<IAppContext>({});

export function useAppContext(): IAppContext {
    return useContext(context)
}
export default context;