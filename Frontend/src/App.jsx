import { createContext, useContext, useState } from 'react'
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
import ProfilePage from './pages/ProfilePage'
import AboutPage from './pages/AboutPage'
import QuizPage from './pages/QuizPage'
import BackButton from './components/quizpage/BackButton'
import Timer from './components/quizpage/Timer'
import ProgressBar from './components/quizpage/ProgressBar'
import QuizButton from './components/quizpage/QuizButton'
import Quiz from './components/Quiz'
import FilterElem from './components/FilterElem'
import QuizFilters from './components/QuizFilters'

let LoginPortal = createContext()
function App() {
  const [count, setCount] = useState(0)
  const [isLoggedin, setIsLoggedin] = useState(CheckLogin())  

  return ( 
    <>
      <LoginPortal.Provider value={{isLoggedin: isLoggedin, setIsLoggedin: setIsLoggedin}}>
      <Routes>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/" element={<WelcomePage></WelcomePage>}></Route>
        <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
        <Route path='/Home' element={<MainPage></MainPage>}></Route>
        <Route path='/Profile' element={<ProfilePage ></ProfilePage>}></Route>
        <Route path='/Aboutus' element={<AboutPage></AboutPage>}></Route>
        <Route path="/QuizPage/:id" element={<QuizPage></QuizPage>}></Route>
      </Routes>
      </LoginPortal.Provider>
    </>    

  )
}


    function handleQuizButtonClick(e) {
        let x = e.clientX - e.currentTarget.offsetLeft
        let y = e.clientY - e.currentTarget.offsetTop
        let ripple = document.createElement("span")
        ripple.className = ` h-2 w-2 bg-white absolute rounded-full animate-ripple`  // dont forget to copy this back to quizButton
        ripple.style.left = `${x}px`
        ripple.style.top = `${y}px`
        ripple.style.animation = "ripple 600ms ease-out"
        e.currentTarget.appendChild(ripple)
        setTimeout(() => {ripple.remove()}, 600)
    }

function CheckLogin(){
  let allCookies = document.cookie
  let CookiesList = allCookies.split(";")
  for (let i = 0; i < CookiesList.length; i++){
    if (CookiesList[i].startsWith("accessToken")){
      if (CookiesList[i].length > 12){
        return(true)
      }
      else{
        return(false)
      }
    }
  }
  return(false)

}


export default App
export {LoginPortal}

