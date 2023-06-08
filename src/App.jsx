import { useState, useEffect } from 'react'

import outlineAsset from './outline-padding.png'
import ColorPicker from 'react-best-gradient-color-picker'

function App() {
  const [open, setOpen] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [color, setColor] = useState('rgba(255,0,0,1)')

  useEffect(() => {

    const closeWindow = (e) => {
      if (e.target.closest('.color-picker') || e.target.closest('#change-color-btn')) return
      setOpen(false)
    }
    
    document.addEventListener('click', closeWindow)

    return () => {
      document.removeEventListener('click', closeWindow)
    }
  })

  return (
    <div className="w-screen h-screen bg-[#353734] flex flex-col justify-center relative items-center">
      <div className='relative w-[12vw] max-w-[150px] min-w-[130px]'>
        <img src={ outlineAsset } className='w-full z-30 relative'/>
        <div style={{ background: color }} className='w-full h-full z-10 absolute top-0'></div>
      </div>
      <button id='change-color-btn' style={isClicked ? { transform: 'scale(110%)' } : {}} onMouseDown={ () => setIsClicked(true) } onMouseUp={ () => setIsClicked(false) } className='bg-white transition-transform hover:scale-95 mt-5 px-3 py-2 rounded-md' onClick={ () => setOpen(tempOpen => !tempOpen) }>Cambia Colore</button>
      <ColorPicker style={ !open ? { display: 'none' } : { display: 'block' }} className='bg-white color-picker rounded-lg fixed top-1/2 translate-y-[-50%] right-[5vw] z-50' value={color} onChange={setColor} />
    </div>
  )
}

export default App
