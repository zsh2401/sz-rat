import React from 'react'
import LC from "../../../sz-support/ui/LodableComponent"
import { sleep } from '../../../sz-support/common'
export default function () {
 
  return <div>
    <LC displayProgress 
    //@ts-expect-error
    loader={
      async () => {
        return (await import("../../../sz-support/ui/SZRatInfo")).default;
      }}
    />
  </div>
}