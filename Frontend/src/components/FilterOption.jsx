import { useState } from "react"

function FilterOption({name, setFiltersNum, filtersNum, setShowOption, setSelectedFilters, selectedFilters}){
    let [selected, setSelected] = useState(false)

    function handleOptionClick(e){
        if (selected){
            setSelected(false)
            setFiltersNum(filtersNum - 1)
            setSelectedFilters(selectedFilters.filter(item => item !== e.target.textContent))

            

        }
        else {
            setSelected(true)
            setFiltersNum(filtersNum + 1)
            setSelectedFilters([...selectedFilters, e.target.textContent])
        }
    }

    return(<div onClick={(e) => {handleOptionClick(e)}} className={`px-2 py-1 text-[14px] border-b-1 border-[#CDCDCD] ${selected ? "bg-[#B9B9B9]" : null} hover:bg-[#B9B9B9] transition`}>{name}</div>)
}

export default FilterOption