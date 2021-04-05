import React from "react"
import ReactLoading from "react-loading"
export default function Loading() {
    return <div style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row"
    }}>
        <ReactLoading type="cylon" color="gray"></ReactLoading>
    </div>
}