import SlidesNum from "./SlidesNum"
import QuestionField from "./QuestionField"
import { useState, useEffect } from "react"
import QuizTitle from "./QuizTitle"
import { getCookieValue } from "../utils"
import Quiz from "../../../Backend/models/Quiz"



function Modal({setShowModal, setShowSuccess}){
    console.log("rendred")
    let [slidesNum, setSlidesNum] = useState(0)
    let [title, setTitle] = useState(0)
    let [quiz, setQuiz] = useState({})

    useEffect(() => {
        setQuiz({})
    }, [slidesNum])


    return (
        <div className="fixed w-[80vw] h-[80vh] bg-[#E6E5E5] z-60 left-[10vw] top-[10vh] px-[30px] rounded-[20px] py-[15px] flex flex-col items-center" id="Modal">
            <h1 className="font-IrishGrover text-[32px]">Quiz creation</h1>
            <QuizTitle setTitle={setTitle}></QuizTitle>
            <SlidesNum setSlidesNum={setSlidesNum}></SlidesNum>
                {slidesNum != 0 ? <div className="w-full overflow-y-scroll mt-[8px]">{Array.from({length: slidesNum}, (_, i) => <QuestionField number={i + 1} quiz={quiz} setQuiz={setQuiz}></QuestionField>)}</div> : <div className="h-[300px]"></div>}
            <p id="errormsg" className="font-IrishGrover text-red-700"></p>
            <div className="flex justify-evenly w-full">
                <div className="h-[42px] w-[126px] rounded-[9px] shadow-[0px_8px_0px_rgba(209,0,0,1)] mt-[16px]">
                    <button className=" text-white text-[16px] font-IrishGrover transition active:translate-y-1 h-[42px] w-[126px] bg-[#EE5B5B] rounded-[9px] hover:bg-[#FF6161]" onClick={() => {setShowModal(false)}} type="button">Cancel</button>
                </div>
                <div className="h-[42px] w-[126px] rounded-[9px] shadow-[0px_8px_0px_rgba(0,151,138,1)] mt-[16px]">
                    <button className=" text-white text-[16px] font-IrishGrover transition active:translate-y-1 h-[42px] w-[126px] bg-[#00B0A2] rounded-[9px] hover:bg-[#00B5A6]" onClick={() => {submitQuiz(title, slidesNum, quiz) ; setShowModal(false); setShowSuccess(true)}}>Create Quiz</button>
                </div>
            </div>
        </div>
    )
}

export default Modal

async function submitQuiz(title, num, data, setShowModal) {
    let elem = document.getElementById("errormsg")
    if (title == ""){
        elem.textContent = "Title must not be empty"
        return
    }
    if (title.length < 6){
        elem.textContent = "length of title must be more than 6"
        return
    }
    if (num == 0){ // this is for the case where a symbol is entered or field not filed
        elem.textContent = "Please fill the 'Number of slides' field correctly"
    }
    if (num < 1 || num > 10){
        elem.textContent = ""
        return
    }
    console.log(data)
    for (let [keys, values] of Object.entries(data)){
        console.log(values)
        if (Object.keys(values).length != 5){ // if all the fields are populated there will be 5 key value pairs if not then there is an issue
            elem.textContent = "please fill all the fields"
            return
        }
        for (let [key, value] of Object.entries(values)){
            if (value == ""){
                elem.textContent = "please fill all the fields"
                return                
            }
        }
    }
    elem.textContent = ""
    let token = getCookieValue("accessToken")
    let response = await fetch("http://localhost:5001/createQuiz", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`
        },
        body: JSON.stringify({"Title": title, "SlidesNum": num, "Slides": data})
        
    })
    if (response.status == 401){
        elem.textContent = "Title already exists"
        return
    }
}


