import React, { useCallback } from 'react'
import { IStdProps, sleep } from 'sz-react-support';
import { useAppContext } from '../../../AppContext';
import pkgInfo from "../../../../package.json"
import LodableComponent from "../../../sz-ui/LodableComponent"
//@ts-expect-error
import css from "./index.css"
export default function () {

  const context = useAppContext()

  const footbarStateSwitcher = useCallback(() => {
    context.footbarVisible = !context.footbarVisible
  }, [context.footbarVisible])

  const navbarStateSwitcher = useCallback(() => {
    context.navbarVisible = !context.navbarVisible
  }, [context.navbarVisible])

  return <div style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    minHeight: "100%"
  }}>

    <div style={{ paddingTop: "20px", maxWidth: "700px" }}>

      <a style={{ textAlign: "center", display: "block" }} href="https://github.com/zsh2401/sz-rat/blob/master/src/view/pages/IndexPage/index.tsx" target="_blank">
        src/view/pages/IndexPage/index.tsx</a>

      <FeatureCard name="Async Component Load">
        <LodableComponent displayProgress
          //@ts-expect-error
          loader={
            async () => {
              await sleep(1000)
              return (await import("../../../sz-ui/SZRatInfo")).default;
            }}
        />
      </FeatureCard>

      <FeatureCard name="React Context">
        <button onClick={navbarStateSwitcher}>{context.navbarVisible ? "Hide Navbar" : "Display Navbar"}</button>
        <button onClick={footbarStateSwitcher}>{context.footbarVisible ? "Hide footbar" : "Display footbar"}</button>
      </FeatureCard>

      <FeatureCard name="PWA">
        See the right side of your navigation bar!
        <p>You can custom your PWA by configurating  
        Workbox Plugin and WebpackPwaManifest
        </p>
</FeatureCard>

      <FeatureCard name="Dependencies">
        {(() => {
          const result = []
          for (let key in pkgInfo.dependencies) {
            result.push(<div key={key}>{key}</div>)
          }
          return result
        })()}
      </FeatureCard>
    </div>
  </div>
}

interface FeatureCardProps extends IStdProps {
  name: string
}
function FeatureCard(props: FeatureCardProps) {
  return <div className={css["feature-box"]}>
    <h3 className={css["feature-name"]}>{props.name}</h3>
    <div className={css["content-wrapper"]}>
      <div>
        {props.children}
      </div>
    </div>
  </div>
}