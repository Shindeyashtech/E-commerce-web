import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/popular/Popular'
import Offers from '../Components/offers/Offers'
import NewCollection from '../Components/NewCollection/NewCollction'
import NewLetter from '../Components/NewsLetter/NewLetter'

const Shop = () => {
  return (
    <div>
      <Hero></Hero>
      <Popular></Popular>
      <Offers></Offers>
      <NewCollection></NewCollection>
      <NewLetter></NewLetter>
    </div>
  )
}

export default Shop
