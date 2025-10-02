import Footer from "../components/Footer";
import Navbar from "../components/Nabvar";
import SearchBar from "../components/SearchBar";
import Quiz from "../components/Quiz";
import { useEffect } from "react";
import { useState } from "react";

function MainPage(){

    let [allQuizzes, setAllQuizzes] = useState([])

    useEffect(() => {
        async function getQuizzes(){
            let response = await fetch("http://localhost:5001/getallquizzes", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
        }
        })
        let allQuizzes = await response.json()
        setAllQuizzes(allQuizzes)
        }
        getQuizzes()
        }, [])
        console.log(allQuizzes)
    
    return(<>
            <Navbar></Navbar>
                <div className="h-[107rem] pt-[7.125rem] flex flex-col items-center">
                    <SearchBar></SearchBar>
                    <div className="mt-[80px] flex flex-wrap justify-center gap-18">
                        {allQuizzes.map((value) => <Quiz title={value.quizTitle} creator={value.quizCreator} slidesNum={value.slidesNum} Date={value.createdAt} id={value._id}></Quiz>)}
                    </div>
                </div>
                
            
            <Footer></Footer>
            </>)
}

export default MainPage


