import React from "react"
import {nodeStore} from "../stores/nodeStore.jsx"

import ReactPage from "./views/ReactPage.js";
import ReactNativePage from "./views/ReactNativePage.js";
import NextPage from "./views/NextPage.js";

export default function NodeDescription() {
  
  const {nodeName} = nodeStore()
  console.log('nodeDescription', nodeName);
  return (
    <div className="justify-center items-center p-6">
      {/* <h1 className="text-2xl font-bold text-center">{nodeName}</h1> */}
      {/* <p className="text-sm"> */}
        {nodeDescriptions[nodeName]}
      {/* </p> */}
    </div>
  )
}

const nodeDescriptions = {
  2: <ReactPage/>,
  3: <ReactNativePage/>,
  4: <NextPage/>
}