import { useState } from 'react'

import outlineAsset from './outline-padding.png'
import ColorPicker from 'react-best-gradient-color-picker'

function App() {
  const [color, setColor] = useState('rgba(255,0,0,1)')

  return (
    <div className="w-screen h-screen bg-[#353734] flex justify-center relative items-center">
      <div className='relative w-[20vh]'>
        <img src={ outlineAsset } className='w-full z-30 relative'/>
        <div style={{ background: color }} className='w-full h-full z-10 absolute top-0'></div>
      </div>
      <ColorPicker className='bg-white rounded-lg fixed top-1/2 translate-y-[-50%] right-[5vw] z-50' value={color} onChange={setColor} />
    </div>
  )
}

export default App
