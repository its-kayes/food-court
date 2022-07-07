import React from 'react'
import useUser from '../../hooks/useUser'
import { Banner } from './Banner'
import { ChooseSection } from './ChooseSection'
import FoodAd from './FoodAd'
import Products from './Products'
import { WhyChooseUs } from './WhyChooseUs'

export const HomeMain = () => {
  const { user } = useUser();
  console.log(user)
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
