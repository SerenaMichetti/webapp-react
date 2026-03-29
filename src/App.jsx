import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MovieReviews from './pages/MovieReviews'
import MovieDetail from './pages/MovieDetail'
import DefaultLayout from './layouts/DefaultLayout'
//import './App.css'

function App() {
  // const [count, setCount] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/reviews/:id" element={<MovieReviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
