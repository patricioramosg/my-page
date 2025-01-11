import StackDescription from "./views/StackDescription.js";
import {nodeStore} from "../stores/nodeStore.js"
import {nodes} from "./nodes.js"

export default function NodeDescription() {
  const {activeNode} = nodeStore()
  return (
    <div className="justify-center items-center p-6 animate-fade-in" key={activeNode}>
      <StackDescription 
        title={nodes[activeNode].data.title} 
        description={nodes[activeNode].data.description}
      />
    </div>
  )
}
