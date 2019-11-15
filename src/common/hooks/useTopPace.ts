import { useEffect } from "react";
import * as topPace from '../view-helper/top-pace'
import useRestorable from './useRestorable'
export type percentSetter = (percent:number)=>Promise<unknown>;
export type percentGetter = ()=>number;
export default function():[percentGetter,percentSetter]{
    const setter = topPace.updateProgress;
    const getter = topPace.getPercent;
    useRestorable(()=>{
        return ()=>{
            setter(0);
        }
    });
    return [getter,setter];
}