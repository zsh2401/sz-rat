import nProgress from 'nprogress';
import React from 'react'
import { IStdProps, useAsyncState } from '../../common';

export interface LoadableComponentProps extends IStdProps {

    loader: () => Promise<React.ReactElement>;

    loading?: React.ReactElement;

    error?: React.ReactElement;

    displayProgress?: boolean;
}

export default function (props: LoadableComponentProps) {
    const [content,] = useAsyncState<React.ReactElement>({
        initialState: props.loading ?? <div>Loading</div>,
        real: async () => {
            try {
                if (props.displayProgress) {
                    nProgress.start();
                }
                return await props.loader();
            } catch {
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