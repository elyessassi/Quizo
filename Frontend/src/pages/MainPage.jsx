import Footer from "../components/Footer";
import Navbar from "../components/Nabvar";
import SearchBar from "../components/SearchBar";

function MainPage(){

    return(<>
            <Navbar></Navbar>
                <div className="h-[107rem] pt-[7.125rem] flex justify-center"><SearchBar></SearchBar></div>
            
            <Footer></Footer>
            </>)
}

export default MainPage