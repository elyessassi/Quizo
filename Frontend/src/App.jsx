import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Nabvar'
import Footer from './components/Footer'
import Button from './components/Button'
import WelcomePage from "./pages/WelcomePage"
import TextField from './components/TextField'
import LoginPage from "./pages/Loginpage"
import SignupPage from './pages/SignupPage'
import SearchBar from './components/SearchBar'
import SearchButton from './components/SeachButton'
import FiltersButton from './components/FiltersButton'
import { Route ,Routes } from 'react-router-dom'
import MainPage from './pages/MainPage';
import SmallQuiz from './components/SmallQuiz'
import Success from './components/Success'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/" element={<WelcomePage></WelcomePage>}></Route>
        <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
        <Route path='/Home' element={<MainPage></MainPage>}></Route>
      </Routes>
    </>
  )
}

export default App
