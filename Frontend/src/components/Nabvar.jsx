import { useContext, useState} from "react"
import { useNavigate } from "react-router-dom"
import {Link} from "react-router-dom"
import { LoginPortal } from "../App"
import { getCookieValue } from "../utils"
import Modal from "./Modal"
import Success from "./Success"


function Navbar() {
    let [Clicked, setCliked] = useState(false)
    let [showModal, setShowModal] = useState(false)
    let items = useContext(LoginPortal)
    let navigate = useNavigate()
    let [showSuccess, setShowSuccess] = useState(false)

    let SignupElem = <div className={`text-white flex justify-center items-center font-IrishGrover text-[1.375rem] `}><p className="hover:scale-110 transition"><Link to="/signup">Sign up</Link></p></div>
    let LogoutElem = <div className={`text-[#EE5B5B] flex justify-center items-center font-IrishGrover text-[1.375rem] border-white cursor-pointer`}><p className="hover:scale-110 transition" onClick={HandleLogOut}>Logout</p></div>
    let SignupElemSide = <div className={`h-20 border-b-4 text-white flex justify-center items-center font-IrishGrover text-[1.375rem] border-white`}><Link to="/signup"><p className="hover:scale-110 transition">Sign up</p></Link></div>
    let LogoutElemSide = <div className={`h-20 border-b-4 text-[#EE5B5B] flex justify-center items-center font-IrishGrover text-[1.375rem] border-white cursor-pointer`}><p className="hover:scale-110 transition" onClick={HandleLogOut}>Logout</p></div>
    let LoginElem = <Link to="/login"><p className="text-[1.5rem] font-IrishGrover text-white hover:scale-110 transition">Log in</p></Link>
    let LoginElemSide = <div className="h-20 border-b-4 text-white flex justify-center items-center font-IrishGrover text-[1.375rem]"><Link to="/login"><p className="hover:scale-110 transition">Log in</p></Link></div>
    let ProfileElem = <p className="text-[1.5rem] font-IrishGrover text-white hover:scale-110 transition" >Profile</p>
    

    function HandleLogOut(){
        document.cookie = "accessToken="
        items.setIsLoggedin(false)
        navigate("/")
    }

    async function HandleProfile(){
        let result = await fetch("http://localhost:5001/profile", {
            method: "post",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${getCookieValue("accessToken")}`
            }
        })
        if (result.status != 200){
            HandleLogOut()
        }
        else{
            navigate("/Profile", {
                state: {id}
            })
        }
    }


    return(
        <>
            <nav className="fixed z-50 block">
                {showModal ? <Modal setShowModal={setShowModal} setShowSuccess={setShowSuccess}></Modal> : null}
                <div className="relative z-30 text-bold bg-[#5D688A] h-[5.625rem] w-screen">
                    <div className="md:mx-[8.4375rem] flex items-center justify-between h-[5.625rem] sm:mx-[4.375rem] mx-[2rem]">
                        <Link to="/Home"><p className="font-Billabong text-[3.375rem] text-white hover:scale-110 transition">Quizo</p></Link>
                        <div className="gap-8 hidden lg:flex">
                            <a href="#" className="text-[1.5rem] font-IrishGrover text-[#FFFDB8] hover:scale-110 transition"><p onClick={() => {items.isLoggedin ? setShowModal(true) : navigate("/login")}}>Create your Quiz</p></a>
                            <a href="#" className="text-[1.5rem] font-IrishGrover text-white hover:scale-110 transition"><p onClick={() => {navigate("/Home")}}>Browse</p></a>
                            <a href="#" className="text-[1.5rem] font-IrishGrover text-white hover:scale-110 transition"><p onClick={() => {navigate("/Aboutus")}}>About us</p></a>
                        </div>
                        <div className="gap-8 hidden lg:flex">
                          <Link to="/login"><p className="text-[1.5rem] font-IrishGrover text-white hover:scale-110 transition">{items.isLoggedin == false ? "Log in" : null}</p></Link>
                            {items.isLoggedin ? LogoutElem : SignupElem}
                        </div>
                        <div className="flex direction-column flex-col gap-1 items-center hover:scale-110 transition lg:hidden" onClick={() => {setCliked(!Clicked)}}>
                            <span className={`inline-block h-1 w-6 bg-white rounded-sm ${Clicked == true ? "rotate-135 translate-y-2" : "rotate-0"} transition`}></span>
                            <span className={`h-1 w-6 bg-white rounded-sm ${Clicked == true ? "opacity-0" : "opacity-100"} transition`}></span>
                            <span className={`inline-block h-1 w-6 bg-white rounded-sm ${Clicked == true ? "rotate-45 -translate-y-2" : "rotate-0"} transition`}></span>
                        </div>
                    </div>
                </div>
                <div className="absolute z-20 lg:hidden -top-[30.625rem]">
                    <div className={`bg-[#707995] ${items.isLoggedin ? "h-[20rem]": "h-[25rem]"} flex flex-col transition ${Clicked == false ? "translate-y-0" : "translate-y-[36.25rem]"} w-screen`}>
                            <div className="h-20 border-b-4 text-white flex justify-center items-center font-IrishGrover text-[1.375rem]"><a href="#" className="hover:scale-110 transition" onClick={() => {items.isLoggedin ? setShowModal(true) : navigate("/login")}}>Create your Quiz</a></div>
                            <div className="h-20 border-b-4 text-white flex justify-center items-center font-IrishGrover text-[1.375rem]"><a href="#" className="hover:scale-110 transition" onClick={() => {navigate("/Home")}}>Browse</a></div>
                            <div className="h-20 border-b-4 text-white flex justify-center items-center font-IrishGrover text-[1.375rem]"><a href="#" className="hover:scale-110 transition" onClick={() => {navigate("/Aboutus")}}>About us</a></div>
                            <div className={`h-20 border-b-4 text-white flex justify-center items-center font-IrishGrover text-[1.375rem] ${items.isLoggedin ? "hidden": null}`}><Link to="/login"><p className={`hover:scale-110 transition`}>{items.isLoggedin == false ? "Log in" : "Profile"}</p></Link></div>
                            {items.isLoggedin ? LogoutElemSide : SignupElemSide}
                    </div>
                </div>
            </nav>
            {showSuccess ? <Success></Success> : null}
        </>
    )
}



export default Navbar