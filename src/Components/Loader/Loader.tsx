import * as React from 'react'

import './Loader.sass'

import preloader from '../../Assets/img/preloader.webp'

interface LoaderProps {
  height?: number | string
}

function Loader({ height }: LoaderProps) {
  return (
    <div className='Loader' style={{ height: height ?? undefined }}>
      <img src={preloader} alt={'preloader'} />
    </div>
  )
}

export default Loader
