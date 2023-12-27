
import './App.css'
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <div className='h-screen   '>

      <BrowserRouter>

        <Routes>
          <Route path='/home' element={<ProtectedRoute> <Home/> </ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
 
          <Route path='/register' element={<Register />} />
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
