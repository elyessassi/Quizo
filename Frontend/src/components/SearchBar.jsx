import { useState } from "react"
import SearchButton from "./SeachButton"
import FiltersButton from "./FiltersButton"

function SearchBar(){
    let [val, setVal] = useState("")
    let [showCross, setShowCross] = useState(false)

    return(
        <>
            <div className="flex h-[48px]">
            <form className=" w-[18.75rem] mr-[2rem]">
                    <div className="bg-[#D9D9D9] rounded-[1.5625rem] w-[18.75rem] flex items-center outline-4 outline outline-[#5D688A]">
                        <input type="text" title="title_name" onChange={CrossState} placeholder="Search for Quizes" className="outline-hidden h-[3rem] w-[16.5rem] rounded-[1.5625rem] bg-[#D9D9D9]  text-[1rem] p-[1rem] focus:placeholder:text-transparent caret-[#5D688A]"></input>
                        <button type="reset" id="1" className="hidden" onClick={HideButton}><img src="src\assets\x.png" className="w-[1.25rem] h-[1.25rem] ml-auto"></img></button>
                    </div>
                </form>
                <SearchButton></SearchButton>
            </div>
        </>
    )
}

// function that clearn the input field value

function CrossState(){
    let input = document.querySelector("input")
    let button = document.getElementById("1")
    if (input.value != ""){
        button.classList.remove("hidden")
    }
    if (input.value == ""){
        button.classList.add("hidden")
    }
}

// function that hides the button (used to hide the button when clicking on it)

function HideButton(){
    let button = document.getElementById("1")
    button.classList.add("hidden")
}


export default SearchBar