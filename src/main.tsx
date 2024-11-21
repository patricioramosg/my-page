import React from "react"
import ReactDOM from "react-dom/client"
import { ReactFlowProvider } from "@xyflow/react"

import Flow from "../src/App/index"

import "./index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  </React.StrictMode>
)
