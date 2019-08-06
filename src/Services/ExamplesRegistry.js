import React from "react"

import DebugConfig from "../Config/DebugConfig"
let globalComponentExamplesRegistry = []
let globalPluginExamplesRegistry = []

export const addComponentExample = (title, usage = () => {}) => {
  if (DebugConfig.includeExamples)
    globalComponentExamplesRegistry.push({ title, usage })
} // eslint-disable-line

export const addPluginExample = (title, usage = () => {}) => {
  if (DebugConfig.includeExamples)
    globalPluginExamplesRegistry.push({ title, usage })
} // eslint-disable-line

const renderComponentExample = example => {
  return <div />
}

const renderPluginExample = example => {
  return <div />
}

// export const renderComponentExamples = () => R.map(renderComponentExample, globalComponentExamplesRegistry)

// export const renderPluginExamples = () => R.map(renderPluginExample, globalPluginExamplesRegistry)

// Default for readability
export default {
  renderComponentExamples,
  addComponentExample,
  renderPluginExamples,
  addPluginExample,
}
