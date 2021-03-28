import nProgress from 'nprogress';
import React from 'react'
import { IStdProps, useAsyncState } from 'sz-react-support';
import DefaultLoading from "./DefaultLoading"
export interface LoadableComponentProps extends IStdProps {

    loader: () => Promise<React.ReactElement>;

    loading?: React.ReactElement;

    error?: React.ReactElement;

    displayProgress?: boolean;
}

export default function (props: LoadableComponentProps) {

    const { state: content } = useAsyncState<React.ReactElement>({
        initialState: props.loading ?? <DefaultLoading />,
        provider: async () => {
            try {
                if (props.displayProgress) {
                    nProgress.start();
                }
                return await props.loader();
            } catch (err: any) {
                console.error("Could not load async component");
                console.error(err);
                return props.error ?? <div>Error</div>;
            } finally {
                if (props.displayProgress) {
                    nProgress.done();
                }
            }
        },
    });

    return <div>
        {content}
    </div>
}

