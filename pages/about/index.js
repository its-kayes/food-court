import React from 'react'
import { ChooseSection } from '../../components/Home/ChooseSection'
import OurHistory from './OurHistory'
import ParallaxSection from './ParallaxSection'
import Testimonial from './Testimonial'

function index() {
  return (
   <>
   <OurHistory/>
   <ParallaxSection/>
   <Testimonial/>
   </>
  )
}

export default index