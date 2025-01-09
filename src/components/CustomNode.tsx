import React, { memo } from "react"
import { Handle, Position } from "@xyflow/react"
import MySVG from "./svg"
import {nodeStore} from "../stores/nodeStore.jsx"

function CustomNode( props ) {

  // console.log('data',props)
  // const updateNodeName = nodeStore((state) => state.nodeName)
  const {updateNodeName} = nodeStore()

  return (
    <div
      className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400"
      onClick={() => updateNodeName(`${props.id}`)}
    >
      <div className="flex">
        <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100">
          {/* {data.emoji} */}
          <MySVG />
          {/* <img src={data.emoji} alt="emoji" className="w-12 h-12" /> */}
        </div>
        <div className="ml-2">
          <div className="text-lg font-bold">{props.data.name}</div>
          <div className="text-gray-500">{props.data.job}</div>
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        className="w-16 !bg-teal-500"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-16 !bg-teal-500"
      />
    </div>
  )
}

export default memo(CustomNode)
