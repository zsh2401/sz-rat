import React from 'react'
import LC from "../../../sz-support/ui/LodableComponent"
import { sleep } from '../../../sz-support/common'
export default function () {
  return <div>
    <LC displayProgress loader={
      async () => {
        await sleep(500)
        return (await import("../../../sz-support/ui/SZRatInfo")).default;
      }}
    />
  </div>
}