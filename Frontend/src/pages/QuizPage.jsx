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
                <div className="h-[800px] bg-[#171515] flex justify-center items-center" id="main">
                    <div className="h-[63px] w-[189px] rounded-[9px] shadow-[0px_8px_0px_rgba(0,151,138,1)] mt-[16px]" id="start-button">
                        <button className=" text-white text-[16px] font-IrishGrover transition active:translate-y-1 h-[63px] w-[189px] bg-[#00B0A2] rounded-[9px] hover:bg-[#00B5A6]" onClick={() => {getQuizById(id)}}>Start</button>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="hidden text-white mb-[150px]" id="question"></p>
                        <div className="flex justify-evenly hidden gap-4" id="button-section">
                            <div className="h-[42px] w-[126px] rounded-[9px] shadow-[0px_8px_0px_rgba(0,151,138,1)] mt-[16px]" id="button1">
                                <button className=" text-white text-[16px] font-IrishGrover transition active:translate-y-1 h-[42px] w-[126px] bg-[#00B0A2] rounded-[9px] hover:bg-[#00B5A6]" onClick={() => {}}>Create Quiz</button>
                            </div>
                            <div className="h-[42px] w-[126px] rounded-[9px] shadow-[0px_8px_0px_rgba(0,151,138,1)] mt-[16px]" id="button2">
                                <button className=" text-white text-[16px] font-IrishGrover transition active:translate-y-1 h-[42px] w-[126px] bg-[#00B0A2] rounded-[9px] hover:bg-[#00B5A6]" onClick={() => {}}>Create Quiz</button>
                            </div>
                            <div className="h-[42px] w-[126px] rounded-[9px] shadow-[0px_8px_0px_rgba(0,151,138,1)] mt-[16px]" id="button3">
                                <button className=" text-white text-[16px] font-IrishGrover transition active:translate-y-1 h-[42px] w-[126px] bg-[#00B0A2] rounded-[9px] hover:bg-[#00B5A6]" onClick={() => {}}>Create Quiz</button>
                            </div>
                            <div className="h-[42px] w-[126px] rounded-[9px] shadow-[0px_8px_0px_rgba(0,151,138,1)] mt-[16px]" id="button4">
                                <button className=" text-white text-[16px] font-IrishGrover transition active:translate-y-1 h-[42px] w-[126px] bg-[#00B0A2] rounded-[9px] hover:bg-[#00B5A6]" onClick={() => {}}>Create Quiz</button>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer></Footer>
        </>
    )
}
export default QuizPage


async function getQuizById(id){
    let response = await fetch(`http://localhost:5001/getquizbyid?id=${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    let quizObj = await response.json()
    console.log(quizObj)
    let startBtn = document.getElementById("start-button")
    let question = document.getElementById("question")
    let ButtonSection = document.getElementById("button-section")
    let btn1 = document.getElementById("button1")
    let btn2 = document.getElementById("button2")
    let btn3 = document.getElementById("button3")
    let btn4 = document.getElementById("button4")
    startBtn.classList.add("hidden")
    question.textContent = quizObj.questions.Slide1.Question
    btn1.querySelector("button").innerText = quizObj.questions.Slide1.CorrectAnswer
    btn2.querySelector("button").innerText = quizObj.questions.Slide1.WrongAnswer1
    btn3.querySelector("button").innerText = quizObj.questions.Slide1.WrongAnswer2
    btn4.querySelector("button").innerText = quizObj.questions.Slide1.WrongAnswer3
    question.classList.remove("hidden")
    ButtonSection.classList.remove("hidden")

}

