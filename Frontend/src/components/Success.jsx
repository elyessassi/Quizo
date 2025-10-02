
function Success(){

    return(
        <div className="fixed top-[5.625rem] w-full">
            <div className="w-full h-[48px] bg-[#A0EFA4] flex px-[20px] items-center justify-between" id="container">
                <div></div>
                <h1 className="text-[#006B0C] text-[16px] font-IrishGrover ">Quiz Created Successfully</h1>
                <button className="text-[#006B0C] text-[24px]" onClick={HideButton}>X</button>
            </div>
        </div>
    )
}

function HideButton(){
    let elem = document.getElementById("container")
    elem.classList.add("hidden")
}


export default Success