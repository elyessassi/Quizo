import { useState } from "react"
import {Link} from "react-router-dom"


function Navbar({isLogged}) {
    const [Clicked, setCliked] = useState(false)
    

    return(
        <>
            <nav className="fixed z-50 block">
                <div className="relative z-30 text-bold bg-[#5D688A] h-[5.625rem] w-screen">
                    <div className="md:mx-[8.4375rem] flex items-center justify-between h-[5.625rem] sm:mx-[4.375rem] mx-[2rem]">
                        <Link to="/"><p className="font-Billabong text-[3.375rem] text-white hover:scale-110 transition">Quizo</p></Link>
                        <div className="gap-8 hidden lg:flex">
                            <a href="#" className="text-[1.5rem] font-IrishGrover text-[#FFFDB8] hover:scale-110 transition"><p>Create your Quiz</p></a>
                            <a href="#" className="text-[1.5rem] font-IrishGrover text-white hover:scale-110 transition"><p>Browse</p></a>
                            <a href="#" className="text-[1.5rem] font-IrishGrover text-white hover:scale-110 transition"><p>About us</p></a>
                        </div>
                        <div className="gap-8 hidden lg:flex">
                            <Link to="/login"><p className="text-[1.5rem] font-IrishGrover text-white hover:scale-110 transition">{isLogged == false ? "Log in" : "Profile"}</p></Link>
                            <Link to="/signup"><p className="text-[1.5rem] font-IrishGrover text-white hover:scale-110 transition">{isLogged == false ? "Sign up" : "Log out"}</p></Link>
                        </div>
                        <div className="flex direction-column flex-col gap-1 items-center hover:scale-110 transition lg:hidden" onClick={() => {setCliked(!Clicked)}}>
                            <span className={`inline-block h-1 w-6 bg-white rounded-sm ${Clicked == true ? "rotate-135 translate-y-2" : "rotate-0"} transition`}></span>
                            <span className={`h-1 w-6 bg-white rounded-sm ${Clicked == true ? "opacity-0" : "opacity-100"} transition`}></span>
                            <span className={`inline-block h-1 w-6 bg-white rounded-sm ${Clicked == true ? "rotate-45 -translate-y-2" : "rotate-0"} transition`}></span>
                        </div>
                    </div>
                </div>
                <div className="absolute z-20 lg:hidden -top-[30.625rem]">
                    <div className={`bg-[#707995] h-[25rem] flex flex-col transition ${Clicked == false ? "translate-y-0" : "translate-y-[36.25rem]"} w-screen`}>
                            <div className="h-20 border-b-4 text-white flex justify-center items-center font-IrishGrover text-[1.375rem]"><a href="#" className="hover:scale-110 transition">Create your Quiz</a></div>
                            <div className="h-20 border-b-4 text-white flex justify-center items-center font-IrishGrover text-[1.375rem]"><a href="#" className="hover:scale-110 transition">Browse</a></div>
                            <div className="h-20 border-b-4 text-white flex justify-center items-center font-IrishGrover text-[1.375rem]"><a href="#" className="hover:scale-110 transition">About us</a></div>
                            <Link to="/login"><div className="h-20 border-b-4 text-white flex justify-center items-center font-IrishGrover text-[1.375rem]"><a href="#" className="hover:scale-110 transition">{isLogged == false ? "Log in" : "Profile"}</a></div></Link>
                            <Link to="/signup"><div className="h-20 border-b-4 text-white flex justify-center items-center font-IrishGrover text-[1.375rem]"><a href="#" className="hover:scale-110 transition">{isLogged == false ? "Sign up" : "Log out"}</a></div></Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar