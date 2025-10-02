
function QuizTitle({setTitle}){

    return (
        <>
            <form className="flex justify-between w-full mt-[16px] items-center md:justify-evenly">
                <label className="font-IrishGrover text-24">Enter the title of the quiz:</label>
                <input className="bg-white outline-2 outline-[#5D688A] w-[120px] h-[28px] rounded-[20px] px-4 focus:outline-3 text-center text-[12px]" onChange={(e) => {setTitle(e.target.value)}}></input>
            </form>
        </>
    )
}

export default QuizTitle

