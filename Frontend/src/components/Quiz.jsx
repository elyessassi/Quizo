import { useNavigate } from "react-router-dom"
import QuizPage from "../pages/QuizPage"


function Quiz({title, creator, slidesNum, Date, id}){

    let navigate = useNavigate()
    return(<>
        <div className="h-[165px] w-[165px] rounded-xl flex flex-col justify-around items-center bg-[#D9D9D9] p-[20px] transition hover:scale-105" onClick={() => {navigate(`/QuizPage/${id}`,)}}>
            <h1 className="text-[18px] font-IrishGrover text-center">{title}</h1>
            <div className="flex flex-col">
                <p className="text-[12px] font-IrishGrover">Creator: {creator}</p>
                <p className="text-[12px] font-IrishGrover">Number of slides: {slidesNum}</p>
                <p className="text-[8px] font-IrishGrover">Created at: {Date.split("T")[0]}</p>
            </div>
        </div>
    </>)
}

export default Quiz