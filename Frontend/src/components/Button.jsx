
function Button({name}){
    return(<>
            <div className="h-[3.5rem] w-[10.5rem] rounded-[9px] shadow-[0px_8px_0px_rgba(0,151,138,1)] ">
                <button className=" text-white text-[1.3rem] font-IrishGrover transition active:translate-y-1 h-[3.5rem] w-[10.5rem] bg-[#00B0A2] rounded-[9px] hover:bg-[#00B5A6]">
                    {name}
                </button>
            </div>
            </>)
}

export default Button