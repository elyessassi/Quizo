import { useState } from "react"

function FiltersButton(){
    let [numFilters, setNumFilters] = useState(0)

    return (<>
                <div className=" w-[6rem] h-[3rem] shadow-[0px_6px_0px_rgba(80,91,124,1)] rounded-full">
                    <button className="w-[6rem] h-[3rem] bg-[#5D688A] rounded-full transition active:translate-y-1 flex justify-center items-center text-white">
                        filters ({numFilters})
                    </button>
                </div>
            </>)
}

export default FiltersButton