import React from 'react'
import Hero from '../Hero'
import Companies from '../Companies'
import Guide from '../Guide'
import Properties from '../Properties'
import Details from '../Details'
import GetStarted from '../GetStarted'
import Footer from '../Footer'

export default function Home() {
  return (
    <div>
        <Hero/>
        <Companies/>
        <Guide/>
        <Properties/>
        <Details/>
        <GetStarted/>
        <Footer/>
    </div>
  )
}
