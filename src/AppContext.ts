import React, { useContext } from "react"
import { History, createHashHistory } from 'history'
export interface IAppContext {
    history: History
}
const context: React.Context<IAppContext> =
    React.createContext<IAppContext>(
        {
            history: createHashHistory()
        }
    );
export function useAppContext() {
    return useContext(context)
}
export default context;