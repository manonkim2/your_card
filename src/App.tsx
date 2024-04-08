import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '@pages/Home'
import TestPage from '@pages/Test'
import CardPage from './pages/Card'
import SigninPage from './pages/Signin'
import SignupPage from './pages/Signup'
import Navbar from './components/shared/Navbar'
import PrivateRoute from './components/auth/PrivateRoute'
import ApplyPage from './pages/Apply'
import ApplyDone from './pages/ApplyDone'
import { Suspense } from 'react'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/card/:id" Component={CardPage} />
        <Route path="/test" Component={TestPage} />
        <Route path="/signin" Component={SigninPage} />
        <Route path="/signup" Component={SignupPage} />
        <Route
          path="/apply/:id"
          element={
            <PrivateRoute>
              <Suspense fallback={<></>}>
                <ApplyPage />
              </Suspense>
            </PrivateRoute>
          }
        />
        <Route
          path="/apply/done"
          element={
            <PrivateRoute>
              <ApplyDone />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
