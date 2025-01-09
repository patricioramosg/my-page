import {create} from 'zustand'

export const nodeStore = create((set) => ({
  nodeName: "??",
  updateNodeName: (newName) => set(() => ({nodeName: newName})),
}))