import Footer from "../components/Footer";
import Navbar from "../components/Nabvar";
import TextField from "../components/TextField";
import AuthButton from "../components/AuthButton";
import { useState } from "react";
import Success from "../components/Success";

function LoginPage(){
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [error, setError] = useState("")

    return(
        <>
            <Navbar></Navbar>
            <div className="h-[800px] flex flex-col items-center justify-center">
                <div className="flex flex-col justify-center items-center">
                    <TextField label={"Email"} value={email} setValue={setEmail}></TextField>
                    <div className="h-[2.625rem]"></div>
                    <TextField label={"Password"} value={password} setValue={setPassword}></TextField>
                    <div className="h-[2rem]"></div>
                    <p className="text-red-700 font-IrishGrover">{error}</p>
                    <div className="h-[2rem]"></div>
                    <AuthButton name={"Login"} Values={{email: email, password:password}} isLogin={true} setError={setError}></AuthButton>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default LoginPage