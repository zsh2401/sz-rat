import { useState, useEffect } from "react"
import debugMx from "../debug-mx";
export enum Status {
    "pending",
    "resolved",
    "rejected"
}
export interface StateAsyncProvider<S> {
    (): Promise<S>;
}
export interface Recaller {
    (): void;
}
export interface StateSetter<S> {
    (newState: S): void;
}
export interface UseAsyncStateOptions<S> {
    initialState: S;
    real?: StateAsyncProvider<S>;
    fake?: StateAsyncProvider<S>;
    onError?: (reason: any) => void;
    shouldFake?: boolean | (() => boolean);
}
export interface ReturnValue<S> {
    state: S;
    loadingStatus: Status;
    recaller: Recaller;
    setter: StateSetter<S>;
    promise: Promise<S>;
}
// export type ReturnValue<S> = [S, Status, Recaller, StateSetter<S>, Promise<S>];
export default function useAsyncState<S>(options: UseAsyncStateOptions<S>):
    ReturnValue<S> {

    const [state, stateSetter] = useState<S>(options.initialState);

    const [status, statusSetter] = useState<Status>(Status.pending);

    let promiseResove: (a: S) => void;
    let promiseReject: (r: any) => void;
    const promise = new Promise<S>((a, b) => {
        a = promiseResove;
        b = promiseReject;
    });

    const resolve = (data: S) => {
        stateSetter(data);
        statusSetter(Status.resolved);
        try {
            promiseResove(data);
        } finally { }
    }
    const reject = (reason: any) => {
        options.onError && options.onError(reason);
        statusSetter(Status.rejected);
        try {
            promiseReject(reason);
        } finally { }
    }

    const fn = async () => {
        try {
            const data = await findProvider(options)();
            resolve(data);
        } catch (err) {
            reject(err);
        }
    };

    useEffect(() => {
        fn();
    }, []);

    return {
        state,
        loadingStatus: status,
        recaller: fn,
        promise,
        setter: stateSetter
    };
}
function findProvider<TData>(options: UseAsyncStateOptions<TData>): StateAsyncProvider<TData> {

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