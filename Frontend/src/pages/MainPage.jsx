import Footer from "../components/Footer";
import Navbar from "../components/Nabvar";
import SearchBar from "../components/SearchBar";
import Quiz from "../components/Quiz";
import { useEffect } from "react";
import { useState } from "react";

function MainPage(){

    let [searchBarValue, setSearchBarValue] = useState("")
    let [allQuizzes, setAllQuizzes] = useState([])
    let [selectedFilters, setSelectedFilters] = useState([])
    let [searchResult, setSearchResult] = useState([])
    let [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getQuizzes(){

                setIsLoading(true)    
                let response = await fetch("http://localhost:5001/getallquizzes", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
            })
            let allQuizzes = await response.json()
            setAllQuizzes(allQuizzes)
            setIsLoading(false)
        }
        getQuizzes()
    }, [])

    useEffect(() => {
        handleSearch(searchBarValue, selectedFilters)
    }, [searchBarValue, selectedFilters])


    // function to handle search using search bar
    async function handleSearch(searchBarValue="", filters=[]){

    if (searchBarValue != '' || filters.length != 0 ){
        setIsLoading(true)
        const response = await fetch("http://localhost:5001/search", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({"searchBarValue": searchBarValue, "filters": filters})
        })
        const data = await response.json()
        setSearchResult(data)
        setIsLoading(false)
    }
}


    
        console.log(allQuizzes)
    
    return(<>
            <Navbar></Navbar>
                <div className="h-[107rem] pt-[7.125rem] flex flex-col items-center">
                    <SearchBar setSearchBarValue={setSearchBarValue} setSelectedFilters={setSelectedFilters} selectedFilters={selectedFilters}></SearchBar>
                    <div className="mt-[80px] flex flex-wrap justify-center gap-6 md:gap-12 sm:gap-9">
                        {isLoading ? <img src="src/assets/spinner.svg"></img> : (searchBarValue == "" && selectedFilters.length == 0 ?
                            allQuizzes.map((value) => <Quiz title={value.quizTitle} user={value.userModel} slidesNum={value.slidesNum} Date={value.createdAt} id={value._id} image={value.img}></Quiz>) 
                            : searchResult.map((value) => <Quiz title={value.quizTitle} user={value.userModel} slidesNum={value.slidesNum} Date={value.createdAt} id={value._id} image={value.img}></Quiz>))}
                    </div>
                </div>
            <Footer></Footer>
            </>)
}



export default MainPage



