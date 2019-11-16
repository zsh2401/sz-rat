import { useEffect } from "react";
import * as topPace from '../view-helper/top-pace'
import useRestorable from './useRestorable'
export type PercentSetter = (percent: number) => Promise<unknown>;
export type PercentGetter = () => number;
export default function (): [PercentGetter, PercentSetter] {
    const setter = topPace.percentSetterAnimated;
    const getter = topPace.percentGetter;
    useRestorable(() => {
        return () => {
            topPace.percentSetter(-1);
        }
    });
    return [getter, setter];
}