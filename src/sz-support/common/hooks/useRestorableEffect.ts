import { useEffect } from "react";
export type Action = ()=>void;
export default function(action:Action,restoreAction:Action){
    useEffect(()=>{
        action();
        return restoreAction;
    });
}