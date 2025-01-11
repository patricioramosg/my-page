import React from 'react'
import Snippet from "../../components/Snippet"

function About() {
  return (
    <section 
      className='h-[90vh] flex bg-teal-300 snap-start' 
      id='about'
    >
      <p>about</p>
      <Snippet/>
    </section>
  )
}

export default About