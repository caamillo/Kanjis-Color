import { useState } from 'react'

import outlineAsset from './outline-padding.png'
import ColorPicker from 'react-best-gradient-color-picker'

function App() {
  const [open, setOpen] = useState(false)
  const [color, setColor] = useState('rgba(255,0,0,1)')

  return (
    <div className="w-screen h-screen bg-[#353734] flex flex-col justify-center relative items-center">
      <button className='bg-white mb-5 px-3 py-2 rounded-md' onClick={ () => setOpen(tempOpen => !tempOpen) }>Change Color</button>
      <div className='relative w-[12vw] max-w-[185px] min-w-[130px]'>
        <img src={ outlineAsset } className='w-full z-30 relative'/>
        <div style={{ background: color }} className='w-full h-full z-10 absolute top-0'></div>
      </div>
      <ColorPicker style={ !open ? { PointerEvent: 'none', opacity: 0 } : { opacity: 1 }} className='bg-white transition-opacity rounded-lg fixed top-1/2 translate-y-[-50%] right-[5vw] z-50' value={color} onChange={setColor} />
    </div>
  )
}

export default App
