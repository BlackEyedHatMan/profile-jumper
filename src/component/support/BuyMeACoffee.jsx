import React from 'react'
import BuyMeACoffeeLogo from '../../asset/support/buy-me-a-coffee-logo.svg'
import { BUY_ME_A_COFFEE_LINK } from '../../config/constants.js'

import './BuyMeACoffee.css'

export const BuyMeACoffee = () => {
  return (
    <div className="BuyMeACoffee">
      <a
        href={BUY_ME_A_COFFEE_LINK}
        target="_blank"
        rel="noopener noreferrer"
        title="Buy Me A Coffee"
      >
        <img src={BuyMeACoffeeLogo} alt="Buy Me A Coffee" className="CoffeeCup"/>
      </a>
    </div>
  )
}
