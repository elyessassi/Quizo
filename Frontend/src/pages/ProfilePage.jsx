import Navbar from "../components/Nabvar";
import Footer from "../components/Footer";
import { getCookieValue } from "../utils";
import { useEffect, useState } from "react";

function ProfilePage(){
    let [userData, setUserData] = useState({})

    useEffect(() => {
        async function getUserData(){
            let accessToken = getCookieValue("accessToken")
            let response = await fetch("http://localhost:5001/profile", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${accessToken}`
                }
            })
            let user = await response.json()
            setUserData(user)
        }
        getUserData()
    }, [])
    console.log(userData)
    

    return ( <>
                <Navbar></Navbar>
                 <div className="h-[2450px] bg-green-500 pt-[5.625rem] flex flex-col items-center">
                    <img src={userData.photo} className="w-[168px] h-[168px] rounded-full"></img>
                    <h3 className="font-IrishGrover text-[32px]">{userData.username}</h3>
                    <h1 className="font-IrishGrover text-[40px]">Stats</h1>
                </div>
                <Footer></Footer>
            </>)
}

export default ProfilePage

