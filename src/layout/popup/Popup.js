import React, { Component } from 'react'

import Profiles from '../../component/profiles/Profiles'
import Branding from '../../component/branding/Branding'

import './Popup.css'

class Popup extends Component {

  render() {
    return (
      <div className="Popup">
        <Profiles/>
        <Branding/>
      </div>
    )
  }
}

export default Popup
