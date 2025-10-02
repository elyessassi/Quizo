import Footer from "../components/Footer";
import Navbar from "../components/Nabvar";
import TextField from "../components/TextField";
import AuthButton from "../components/AuthButton";
import Success from "../components/Success";
import { useState } from "react";

function SignupPage(){
    let [username, setUsername] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [confirm, setConfirm] = useState("")
    let [error, setError] = useState("")

    return(
        <>
            <Navbar></Navbar>
            <div className="h-[55.625rem] flex flex-col items-center justify-center">
                <TextField label={"Username"} value={username} setValue={setUsername}></TextField>
                <div className="h-[2.625rem]"></div>
                <TextField label={"Email"} value={email} setValue={setEmail}></TextField>
                <div className="h-[2.625rem]"></div>
                <TextField label={"Password"} value={password} setValue={setPassword}></TextField>
                <div className="h-[2.625rem]"></div>
                <TextField label={"Confirm Password"} value={confirm} setValue={setConfirm}></TextField>
                <div className="h-[2rem]"></div>
                <p className="text-red-700 font-IrishGrover">{error}</p>
                <div className="h-[2rem]"></div>
                <AuthButton name={"Sign Up"} Values={{username: username, email:email, password:password, confirmPassword:confirm}} setError={setError} isLogin={false}></AuthButton>
            </div>
            <Footer></Footer>
        </>
    )
}

export default SignupPage


