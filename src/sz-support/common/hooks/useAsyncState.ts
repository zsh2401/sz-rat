import { useState, useEffect } from "react"
import debugMx from "../../../common/debug-mx";
type LoadingState = "loading" | "loaded" | "error";
export interface DataProvider<TData> {
    (): Promise<TData>;
}
export interface Recaller {
    (): void;
}
export interface StateSetter<TData> {
    (newData: TData): void;
}
export interface UseAsyncStateOptions<TData> {
    initialState?: TData | (() => TData);
    real?: DataProvider<TData>;
    fake?: DataProvider<TData>;
    onError?: (reason: any) => void;
    shouldFake?: boolean | (() => boolean);
}

export default function useAsyncState<S>(options: UseAsyncStateOptions<S>): [S, LoadingState, Recaller, StateSetter<S>] {

    const [value, valueSetter] = useState<S | any>(options.initialState);
    const [state, stateSetter] = useState<LoadingState>("loading");

    const fn = async () => {
        try {
            const data = await findProvider(options)();
            valueSetter(data);
            stateSetter("loaded");
        } catch (err) {
            options.onError && options.onError(err);
            stateSetter("error");
        }
    };
    useEffect(() => {
        fn();
    }, []);

    return [value, state, fn, valueSetter];
}
function findProvider<TData>(options: UseAsyncStateOptions<TData>): DataProvider<TData> {

    let useFake;
    if (typeof options.shouldFake === "boolean") {
        useFake = options.shouldFake;
    } else if (options.shouldFake) {
        useFake = options.shouldFake();
    } else if (options.fake) {
        useFake = debugMx.IS_DEV;
    } else {
        useFake = false;
    }

    if (options.fake && useFake) {
        return options.fake!;
    } else {
        return options.real!;
    }
}