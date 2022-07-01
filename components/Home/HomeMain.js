import React from 'react'
import { Banner } from './Banner'
import { ChooseSection } from './ChooseSection'
import FoodAd from './FoodAd'
import Products from './Products'
import { WhyChooseUs } from './WhyChooseUs'

export const HomeMain = () => {
  return (
    <div>
      <Banner> </Banner>
      <ChooseSection />

      
      <FoodAd> </FoodAd>
      <Products></Products>
      <WhyChooseUs></WhyChooseUs>
    </div>
  )
}
