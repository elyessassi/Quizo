import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"


function QuizButton({label, onclick, state, quizButtonExtraProperties, setSelectedButtonValue, disabled}) {

    if (state == "correct") {
        return (<button  className="h-[50px] w-[300px] border-2 rounded-2xl border-[#B7E1B6] flex justify-between items-center px-5 bg-[#DBFEDE] z-4 overflow-hidden">{label}<FontAwesomeIcon icon={faCheck} className="text-[#0B7909]"></FontAwesomeIcon></button>)
    }

    if (state == "wrong") {
        return (<button  className="h-[50px] w-[300px] border-2 rounded-2xl border-[#E4C4C4] flex justify-between items-center px-5 bg-[#FEDCDB] z-4 overflow-hidden">{label}<FontAwesomeIcon icon={faX} className="text-[#C11919]"></FontAwesomeIcon></button>)
    }
    if (state == "normal") {
        return (<button onClick={function (e) {if (!disabled)  {onclick(e); setSelectedButtonValue(label)}}} className={`h-[50px] w-[300px] border-2 rounded-2xl border-[#00000033] flex justify-between items-center px-5 hover:bg-[#d6d6d6] relative overflow-hidden z-4 ${quizButtonExtraProperties}`}>{label}</button>)
    }
}

export default QuizButton