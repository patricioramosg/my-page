import React from 'react'
import Flow from "../Flow"
import NodeDescription from "../NodeDescription"

function Stack() {
  return (
    <section className='h-[90vh] snap-start' id='stack'>
      <div className="flex h-[90vh]">
        <div className="w-[65%]">
          <Flow />
        </div>
        <div className="w-[35%] bg-slate-700">
          <NodeDescription />
        </div>
      </div>
    </section>
  )
}

export default Stack