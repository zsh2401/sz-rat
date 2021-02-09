import React from "react"
import ReactLoading from "react-loading"
import HWCenter from '../HWCenter';
export default function Loading() {
    return <HWCenter>
        <ReactLoading type="cylon" color="gray"></ReactLoading>
    </HWCenter>
}