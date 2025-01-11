import {create} from 'zustand'

interface NodeState {
  activeNode: number
  updateActiveNode: (node: number) => void
}

export const nodeStore = create<NodeState>((set) => ({
  activeNode: 1,
  updateActiveNode: (node) => set(() => ({activeNode: node})),
})) 