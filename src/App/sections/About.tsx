import React from 'react'
import Snippet from "../../components/Snippet"
import Sinergy from './Sinergy'

function About() {
  return (
    <section 
      className='h-[90vh] flex bg-teal-300 snap-start' 
      id='about'
    >
      <div className="h-full overflow-y-auto">
        <Sinergy/>
      </div>
    </section>
  )
}

export default About