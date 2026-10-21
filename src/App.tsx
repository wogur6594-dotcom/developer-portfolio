import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import PetPulseProjectPage from './pages/PetPulseProjectPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/projects/petpulse"
            element={<PetPulseProjectPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App