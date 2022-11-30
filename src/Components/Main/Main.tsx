import React from 'react'

import MainTop from '../MainTop'
import MainProduction from '../MainProduction'
import MainBenefits from '../MainBenefits'
import MainRecommended from '../MainRecommended'
import MainWork from '../MainWork'
//import MainCollaboration from '../MainCollaboration'

import './Main.sass'

function Main() {
  return (
    <div className='Main'>
      <MainTop />
      <MainProduction />
      <MainBenefits />
      <MainRecommended />
      <MainWork />
      {/*<MainCollaboration />*/}
    </div>
  )
}

export default Main
