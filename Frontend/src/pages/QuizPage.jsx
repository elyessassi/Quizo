import Navbar from "../components/Nabvar";
import Footer from "../components/Footer";
import { getCookieValue } from "../utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function QuizPage(){

    let {id} = useParams()
    console.log(id)

    return(
        <>
            <Navbar></Navbar>
                <div className="h-[800px] bg-[#171515] flex justify-center items-center">
                    <div className="h-[63px] w-[189px] rounded-[9px] shadow-[0px_8px_0px_rgba(0,151,138,1)] mt-[16px]">
                        <button className=" text-white text-[16px] font-IrishGrover transition active:translate-y-1 h-[63px] w-[189px] bg-[#00B0A2] rounded-[9px] hover:bg-[#00B5A6]" onClick={() => {getQuizById(id)}}>Start</button>
                    </div>
                </div>
            <Footer></Footer>
        </>
    )
}
export default QuizPage


async function getQuizById(id){
    let response = await fetch("http://localhost:5001/getquizbyid", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({id: id})
    })
    let quizObj = response.json()
}

