
function SlidesNum({setSlidesNum}){

    function HandlingSlideNum(num){
        console.log(num)
        let errorMsg = document.querySelector("p")
        if (num == ""){
            errorMsg.innerText = ""
            setSlidesNum(0)
        }
        else{
            let value = Number(num)
            if (Number.isNaN(value)){
                errorMsg.innerText = "The number must be an integer"
                setSlidesNum(0)
            }
            else if (num % 1 != 0){
                errorMsg.innerText = "The number must be an integer"
                setSlidesNum(0)
            }
            else if (num > 10){
                errorMsg.innerText = "The number of slides must be ten or less"
                setSlidesNum(0)
            }
            else if (num < 1){
                errorMsg.innerText = "The number of slides must be positive"
                setSlidesNum(0)
            }
            else{
                errorMsg.innerText = ""
                setSlidesNum(num)
            }
        }

    }

    return (
        <>
            <form className="flex justify-between w-full mt-[16px] items-center md:justify-between">
                <label className="font-IrishGrover text-24">Type the number of slides:</label>
                <input className="bg-white outline-2 outline-[#5D688A] w-[120px] h-[28px] rounded-[20px] px-4 focus:outline-3 text-center mr-9" onChange={(e) => {HandlingSlideNum(e.target.value)}}></input>
            </form>
            <p className="font-IrishGrover text-red-600"></p>
        </>
    )
}

export default SlidesNum

