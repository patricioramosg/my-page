import React, { memo } from "react"
import { Handle, Position } from "@xyflow/react"
import {nodeStore} from "../stores/nodeStore"

interface CustomNodeProps {
  id: string
  data: {
    title: string
    description: string
    emoji: string
  }
}

function CustomNode({ id, data }: CustomNodeProps) {
  const {updateActiveNode} = nodeStore()

  return (
    <div
      className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400"
      onClick={() => updateActiveNode(Number(id))}
    >
      <div className="flex">
        <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100">
          <img src={data.emoji} alt="emoji" className="w-12 h-12" />
        </div>
        <div className="ml-2">
          <div className="text-lg font-bold">{data.title}</div>
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Left}
        className="h-16 !bg-teal-500"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="h-16 !bg-teal-500"
      />
    </div>
  )
}

export default memo(CustomNode)
