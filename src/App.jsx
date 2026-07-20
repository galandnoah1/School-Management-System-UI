import './App.css'
import DashBoardLayout from './layouts/DashBoardLayout'
import { Route,Routes, Navigate } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Routes>
        <Route element={<DashBoardLayout />}>
          <Route index element={<Navigate to="/home" replace/>}/>
          <Route path='/home'/>
          <Route path='/classrooms' />
        </Route>
      </Routes>
    </>
  )
}

export default App
