import React from 'react'
import LodableComponent from "../../../sz-ui/LodableComponent"
export default function () {
 
  return <div>
    <LodableComponent displayProgress 
    //@ts-ignore
    loader={
      async () => {
        return (await import("../../../sz-ui/SZRatInfo")).default;
      }}
    />
  </div>
}