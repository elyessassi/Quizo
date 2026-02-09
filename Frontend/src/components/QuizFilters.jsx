import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"


function QuizFilters({filters, setFilters}){
    let [inputValue, setInputValue] = useState("")

    function handleFilterClick(e){        
        setFilters(filters.filter((item, index) => index != e.target.id))
    }

    function handleButtonClick(){
        if (inputValue != "" && filters.length < 5)
        {
            setFilters([...filters, inputValue])
        }
    }

    return(<>


            <form className="flex justify-between w-full mt-[16px] items-center md:justify-between mb-4">
                <label className="font-IrishGrover text-24">Enter filters:</label>
                <div className="flex gap-2 items-center">
                    <input className="bg-white outline-2 outline-[#5D688A] w-[120px] h-[28px] rounded-[20px] px-4 focus:outline-3 text-center text-[12px]" onChange={(e) => {setInputValue(e.target.value)}}></input>
                    <div className=" w-[28px] h-[28px] shadow-[0px_6px_0px_rgba(80,91,124,1)] rounded-full">
                    <button type="button" className="w-[28px] h-[28px] bg-[#5D688A] rounded-full transition active:translate-y-1 flex justify-center items-center" onClick={handleButtonClick}>
                    <FontAwesomeIcon icon={faPlus} className="text-white"></FontAwesomeIcon>
                    </button>
                    </div>
                </div>
            </form>
            <div className="flex justify-start items-center gap-4">
                {filters.map((label, index) =>  <div className="w-fit h-[25px] bg-[#5D688A] rounded-md flex justify-center items-center text-white p-2 hover:opacity-75 transition" id={`${index}`} onClick={(e) => {handleFilterClick(e)}}>{label}</div>)}
            </div>


        </>)
}

export default QuizFilters