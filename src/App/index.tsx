import React from "react"
import Flow from "./Flow"
import NodeDescription from "./NodeDescription"

export default function index() {
  return (
    <div>
      <div>
        <h1>esto va a ser parte del portafolio</h1>
        <p>
          aqui va a estar el portafolio de proyectos que he realizado en el
          transcurso de mi carrera profesional
        </p>
        <div className="w-full h-96 bg-slate-500"></div>
      </div>
      <div className="flex h-screen">
        <div className="w-[65%]">
          <Flow />
        </div>
        <div className="w-[35%]">
          <NodeDescription />
        </div>
      </div>
    </div>
  )
}
