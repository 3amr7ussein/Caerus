import "@babel/polyfill"
import "./config/global.module.scss"

export const onClientEntry = () => {
  // Without this function body the import will not be picked up.
}

export { default as wrapRootElement } from "./src/state/ReduxWrapper"
