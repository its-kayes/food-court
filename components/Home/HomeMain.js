import React from 'react'
import { Banner } from './Banner'
import { ChooseSection } from './ChooseSection'
import FoodAd from './FoodAd'
import Products from './Products'

export const HomeMain = () => {
  return (
    <div>
      <Banner> </Banner>
      <ChooseSection />

      
      <FoodAd> </FoodAd>
      <Products></Products>
    </div>
  )
}
