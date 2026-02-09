import SlidesNum from "./SlidesNum"
import QuestionField from "./QuestionField"
import { useState, useEffect } from "react"
import QuizTitle from "./QuizTitle"
import { getCookieValue } from "../utils"
import Quiz from "../../../Backend/models/Quiz"
import QuizFilters from "./QuizFilters"



function Modal({setShowModal, setShowSuccess}){
    console.log("rendred")
    let [slidesNum, setSlidesNum] = useState(0)
    let [title, setTitle] = useState(0)
    let [quiz, setQuiz] = useState({})
    let [filters, setFilters] = useState([])

    useEffect(() => {
        setQuiz({})
    }, [slidesNum])


    return (
        
        <div className="fixed w-[80vw] h-[80vh] bg-[#E6E5E5] z-60 left-[10vw] top-[10vh] px-[30px] rounded-[20px] py-[15px] flex flex-col items-center" id="Modal">
            <button className="w-2 h-2" onClick={() => {console.log(filters)}}>hello</button>
            <h1 className="font-IrishGrover text-[32px]">Quiz creation</h1>
            <div className="flex items-center justify-between w-[60vw]">
                <div className="flex flex-col items-between w-[30vw]">
                    <QuizTitle setTitle={setTitle}></QuizTitle>
                    <SlidesNum setSlidesNum={setSlidesNum}></SlidesNum>
                    <QuizFilters filters={filters} setFilters={setFilters}></QuizFilters>
                </div>
                <input type="file" id="image"></input>
            </div>
                {slidesNum != 0 ? <div className="w-full overflow-y-scroll mt-[8px]">{Array.from({length: slidesNum}, (_, i) => <QuestionField number={i + 1} quiz={quiz} setQuiz={setQuiz}></QuestionField>)}</div> : <div className="h-[300px]"></div>}
            <p id="errormsg" className="font-IrishGrover text-red-700"></p>
            <div className="flex justify-evenly w-full">
                <div className="h-[42px] w-[126px] rounded-[9px] shadow-[0px_8px_0px_rgba(209,0,0,1)] mt-[16px]">
                    <button className=" text-white text-[16px] font-IrishGrover transition active:translate-y-1 h-[42px] w-[126px] bg-[#EE5B5B] rounded-[9px] hover:bg-[#FF6161]" onClick={() => {setShowModal(false)}} type="button">Cancel</button>
                </div>
                <div className="h-[42px] w-[126px] rounded-[9px] shadow-[0px_8px_0px_rgba(0,151,138,1)] mt-[16px]">
                    <button className=" text-white text-[16px] font-IrishGrover transition active:translate-y-1 h-[42px] w-[126px] bg-[#00B0A2] rounded-[9px] hover:bg-[#00B5A6]" onClick={() => {submitQuiz(title, slidesNum, quiz, filters) ; setShowModal(false); setShowSuccess(true)}}>Create Quiz</button>
                </div>
            </div>
        </div>
    )
}

export default Modal



async function submitQuiz(title, num, data, filters) {
    let elem = document.getElementById("errormsg")
    const imgElem = document.getElementById("image")
    const imgURL = await storeImg(imgElem.files[0])
    
    if (title == ""){
        elem.textContent = "Title must not be empty"
        return
    }
    if (title.length < 6){
        elem.textContent = "length of title must be more than 6"
        return
    }
    if (num == 0){ // this is for the case where a special character is entered or field not filed
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
            "content-type": "application/json",
            "authorization": `Bearer ${token}`
        },
        body: JSON.stringify({"Title": title, "SlidesNum": num, "Slides": data, "Image": imgURL, "Filters": filters})        
    })
    console.log("haw lenna")
    if (response.status == 401){
        elem.textContent = "Title already exists"
        return
    }
    
}

async function storeImg(image){
    let formData = new FormData()
    const apiKey = import.meta.env.VITE_IMGBB_KEY
    const imageName = `${Date.now()}-${image.name}`

    formData.append("image", image)
    formData.append("name", imageName)
    
    const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: 'POST',
        body: formData
    })
    
    const jsonResponse = await response.json()

    return(jsonResponse.data.url)
}


