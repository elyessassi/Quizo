import { useState } from "react"
import FilterOption from "./FilterOption"

function FiltersDropDown({filters, setSelectedFilters, selectedFilters}){
    let [showOptions, setShowOptions] = useState(false)
    let [filtersNum, setFiltersNum] = useState(0)



    return (<>
    <div className="relative z-6">
        <div className="h-[40px] w-[100px] rounded-[1.5625rem] bg-[#5D688A] text-white justify-center items-center flex" onClick={() => {setShowOptions(!showOptions)}}>Filters ({filtersNum})</div>
        <div className={`w-[100px] h-[125px] shadow-lg rounded-lg overflow-y-scroll bg-white ${showOptions ? "visible" : "hidden"}`}>{filters.map((value) => <FilterOption name={value} setFiltersNum={setFiltersNum} filtersNum={filtersNum} setShowOption={(setShowOptions)} setSelectedFilters={(setSelectedFilters)} selectedFilters={selectedFilters}></FilterOption>)}</div> 
    </div>
        </>)
}

export default FiltersDropDown