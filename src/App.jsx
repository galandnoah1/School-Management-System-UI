
import './App.css'
import DashBoardLayout from './layouts/DashBoardLayout'
import { Route,Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Classroom from './pages/Classroom'
import NotFound from './pages/NotFound'

function App() {
  

  return (
    <>
      <Routes>
        <Route element={<DashBoardLayout />}>
          <Route index element={<Navigate to="/home" replace/>}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/classrooms' element={<Classroom/>}/>
           <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
