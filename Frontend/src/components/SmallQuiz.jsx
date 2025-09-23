
function SmallQuiz(){


    return(<div className="w-[20rem] h-[6.25rem] bg-[#D9D9D9] rounded-[20px] flex items-center px-[31.5px] justify-between">
            <img src="src\assets\test.jpg" className="w-[120px] h-[73px] rounded-[20px] hover:brightness-66 transition hover:scale-110"></img>
            <div className="flex flex-col h-[73px] justify-around text-center">
                <h1 className="font-IrishGrover transition hover:scale-110">Quiz name</h1>
                <p className="font-IrishGrover transition hover:scale-110">Creator name</p>
            </div>
    </div>)
}

export default SmallQuiz