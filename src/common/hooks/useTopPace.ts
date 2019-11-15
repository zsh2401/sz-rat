import { useEffect } from "react";
import * as topPace from '../view-helper/top-pace'
import useRestorable from './useRestorable'
export type PercentSetter = (percent: number) => Promise<unknown>;
export type PercentGetter = () => number;
export default function (): [PercentGetter, PercentSetter] {
    const setter = topPace.updateProgress;
    const getter = topPace.getPercent;
    useRestorable(() => {
        return () => {
            setter(0);
        }
    });
    return [getter, setter];
}