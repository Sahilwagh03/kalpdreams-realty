import React from 'react'
import DeliveredProjects from '../components/DeliveredProjects'
import Amenities from '../components/Amenities'

const Projects = () => {
  return (
    <section className='relative'>
      <Amenities />
      <DeliveredProjects title='Our Projects' />
    </section>
  )
}

export default Projects