import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import MyThree from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyThree />
  </React.StrictMode>,
)
