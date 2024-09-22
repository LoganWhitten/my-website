import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import MyThree from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div className='text-white z-50 text-center flex bg-black w-screen h-screen'>hey girl</div>}>
      <MyThree />
    </Suspense>
  </React.StrictMode>,
)
