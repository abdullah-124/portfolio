import React from 'react'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Banner from './Banner/Banner'

export default function Home() {
  return (
    <div>
        <Banner/>
        <About/>
        <Projects/>
    </div>
  )
}
