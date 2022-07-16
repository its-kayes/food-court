import React from 'react'
import { Footer } from '../../components/Footer/Footer'
import { ChooseSection } from '../../components/Home/ChooseSection'
import { Navbar } from '../../components/Navbar/Navbar'
import OurHistory from './OurHistory'
import ParallaxSection from './ParallaxSection'
import Testimonial from './Testimonial'

function index() {
  return (
   <>
   <Navbar> </Navbar>
   <OurHistory/>
   <ParallaxSection/>
   <Testimonial/>
   <Footer> </Footer>
   </>
  )
}

export default index