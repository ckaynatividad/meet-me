import { useEffect, useState } from 'react'
import './App.css'
import Layout from './views/Layout/Layout'
import Home from './views/Home/Home'

function App() {
  // inital value should match the data type of end value

  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default App
