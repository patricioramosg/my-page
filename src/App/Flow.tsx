// import { useCallback } from "react"
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  // useNodesState,
  // useEdgesState,
  // addEdge,
  // NodeOrigin,
  type NodeOrigin,
  Panel,
  ConnectionLineType,
  OnConnectEnd,
  OnConnectStart
} from "@xyflow/react"

import "@xyflow/react/dist/style.css"

import useStore, { type RFState } from "./store"

import CustomNode from "../components/CustomNode"
import { useShallow } from "zustand/shallow"
import MindMapEdge from "./MindMapEdge"
import MindMapNode from "./MindMapNode/index"
import { useRef, useCallback } from "react"

const selector = (state: RFState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange
})

const nodeTypes = {
  custom: CustomNode,
  mindMap: MindMapNode
}

const edgeTypes = {
  mindmap: MindMapEdge
}
const nodeOrigin: NodeOrigin = [0.5, 0.5]

const connectionLineStyle = { stroke: "#F6AD55", strokeWidth: 3 }
const defaultEdgeOptions = { style: connectionLineStyle, type: "mindmap" }

function Flow() {
  // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  // const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const { nodes, edges, onNodesChange, onEdgesChange } = useStore(
    useShallow(selector)
  )

  const connectingNodeId = useRef<string | null>(null)

  const onConnectStart: OnConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId
  }, [])

  const onConnectEnd: OnConnectEnd = useCallback((event) => {
    // we only want to create a new node if the connection ends on the pane
    const targetIsPane = (event.target as Element).classList.contains(
      "react-flow__pane"
    )

    if (targetIsPane && connectingNodeId.current) {
      console.log(`add new node with parent node ${connectingNodeId.current}`)
    }
  }, [])

  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        // onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        nodeOrigin={nodeOrigin}
        connectionLineStyle={connectionLineStyle}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineType={ConnectionLineType.Straight}
        fitView
        zoomOnScroll={false}
        preventScrolling={false}
        className="bg-purple-300"
      >
        <MiniMap />
        <Controls showInteractive={false} />
        <Background />
        <Panel position="top-left">react flow mind map</Panel>
      </ReactFlow>
    </div>
  )
}

export default Flow
