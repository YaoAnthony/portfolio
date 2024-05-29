import { useState } from 'react'

//router
import { BrowserRouter } from "react-router-dom";


//Header



function App() {
  return (
    <div className='w-full'>
      <BrowserRouter>
        <div className='flex flex-col items-center justify-center h-screen'>
          <h1 className='text-4xl font-bold'>Welcome to React</h1>
          <p className='text-lg mt-2'>Edit <code>src/App.tsx</code> and save to reload.</p>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
