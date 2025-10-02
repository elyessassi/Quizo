import { useEffect } from "react"

function QuestionField({number, quiz, setQuiz}){
    

    useEffect(() => {
        setQuiz(prev => ({...prev, [`Slide${number}`]: {}}))
    }, [])
    
    return (<>
                <div className="flex flex-col items-center w-full">
                    <h2 className="font-IrishGrover text-[24px]">Slide ({number})</h2>
                    <div className="md:flex justify-around w-full">
                        <div>
                            <form className="flex flex-col items-center">
                                <label className="text-[16px] font-IrishGrover mt-[12px]">Type the question</label>
                                <input className="bg-white outline-[#5D688A] outline-2 focus:outline-3 rounded-[20px] h-[40px] w-[275px] px-4 mt-[12px]" onChange={(e) => {setQuiz(prev => ({...prev, [`Slide${number}`] :{ ...prev[`Slide${number}`], [`Question`] : e.target.value}}))}}></input>
                            </form>
                            <form className="flex flex-col items-center">
                                <label className="text-[16px] font-IrishGrover mt-[12px]">Type the correct answer</label>
                                <input className="bg-white outline-[#006B0C] outline-2 focus:outline-3 rounded-[20px] h-[40px] w-[275px] px-4 mt-[12px]" onChange={(e) => {setQuiz(prev => ({...prev, [`Slide${number}`] :{ ...prev[`Slide${number}`], [`CorrectAnswer`] : e.target.value}}))}}></input>
                            </form>
                        </div>
                        <div>
                            <form className="flex flex-col items-center mb-[32px]">
                                <label className="text-[16px] font-IrishGrover mt-[12px]">Type the wrong answers</label>
                                <input className="bg-white outline-[#D10000] outline-2 focus:outline-3 rounded-[20px] h-[40px] w-[275px] px-4 mt-[12px]" onChange={(e) => {setQuiz(prev => ({...prev, [`Slide${number}`] :{ ...prev[`Slide${number}`], [`WrongAnswer1`] : e.target.value}}))}}></input>
                                <input className="bg-white outline-[#D10000] outline-2 focus:outline-3 rounded-[20px] h-[40px] w-[275px] px-4 mt-[12px]" onChange={(e) => {setQuiz(prev => ({...prev, [`Slide${number}`] :{ ...prev[`Slide${number}`], [`WrongAnswer2`] : e.target.value}}))}}></input>
                                <input className="bg-white outline-[#D10000] outline-2 focus:outline-3 rounded-[20px] h-[40px] w-[275px] px-4 mt-[12px]" onChange={(e) => {setQuiz(prev => ({...prev, [`Slide${number}`] :{ ...prev[`Slide${number}`], [`WrongAnswer3`] : e.target.value}}))}}></input>
                            </form>
                        </div>
                    </div>
                </div>
            </>)
}

export default QuestionField