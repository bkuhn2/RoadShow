import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from '../HomePage/HomePage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
    </Routes>


  )
}

export default App

// Remember - bad route error handling + vercel/netflify bad route deployment fix