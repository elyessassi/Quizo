
function TextField({label, value, setValue}){
    return(
        <>
            <div>
                <form className="flex flex-col w-[18.75rem] items-center flex-grow">
                    <label className="mb-[1.5rem] text-[1rem] font-IrishGrover">{label}</label>
                    <input onChange={(e) => {setValue(e.target.value)}} type={label == "Password" || label == "Confirm Password" ? "password" : "text"} title="title_name" placeholder="" className="outline-[#5D688A] outline-2 h-[3rem] w-full rounded-[1.5625rem] bg-[#D9D9D9] focus:outline-4 text-[0.8rem] p-[1rem]"></input>
                </form>
            </div>
        </>
    )
}


export default TextField