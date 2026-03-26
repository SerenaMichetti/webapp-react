import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ReviewsMovie from './pages/ReviewsMovie'
import MovieCard from './pages/MovieCard'
import DefaultLayout from './layouts/DefaultLayout'
//import './App.css'

function App() {
 // const [count, setCount] = useState(null)

  return (
  <BrowserRouter>
    <Routes>
      <Route element={<DefaultLayout />}> 
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MovieCard />} />
      <Route path="/reviews/:id" element={<ReviewsMovie />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
