import { useNavigate } from "react-router-dom"
import QuizPage from "../pages/QuizPage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { fileTypeFromBuffer } from "file-type"
import { useEffect } from "react"
import { background } from "@cloudinary/url-gen/qualifiers/focusOn"
import { position } from "@cloudinary/url-gen/qualifiers/timeline"


function Quiz({title, user, slidesNum, Date, id, rating, image}){

    let navigate = useNavigate()


    return(<>
        <div className=" w-[18vw] min-w-[180px] rounded-xl flex flex-col justify-around items-center bg-[#D9D9D9] transition hover:scale-105" onClick={() => {navigate(`/QuizPage/${id}`,)}}>
            <div className={`aspect-video w-full bg-green-700 rounded-xl flex items-end justify-end p-4 bg-cover`} style={{backgroundImage: `url(${image})`, backgroundPosition: "center"}}>

            </div>
            <div className="flex items-between  p-2 w-full justify-between break-words">
                <img src={user.photo} className="w-[36px] h-[36px] rounded-full mx-1"></img>
                <div className="w-[83.65%] flex justify-between overflow-hiiden">
                    <div className="flex justify-center flex-col">
                        <div>{title}</div>
                        <div className="text-xs opacity-70">{user.username}</div>
                        <div className="text-xs opacity-70">Slides: {slidesNum} | {Date.split("T")[0]}</div>
                    </div>
                    <div className="flex items-start justify-end">
                        
                    </div>
                </div>
            </div>
        </div>
    </>)
}


export default Quiz