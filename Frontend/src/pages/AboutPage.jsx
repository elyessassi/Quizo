import Footer from "../components/Footer";
import Navbar from "../components/Nabvar";

function AboutPage() {

    return(
        <>
            <Navbar></Navbar>
            <div className="h-[725px] bg-[#FFF2EF] flex flex-col items-center justify-center">
                <h1 className="text-[42px] font-IrishGrover">About Us</h1>
                <div className="mx-[150px]">
                    <p className="text-[24px] font-IrishGrover mt-[75px]">Quizo is a website created for users to be able to share knowledge with each other through quizzes</p>
                    <p className="text-[24px] font-IrishGrover mt-[30px]">enjoy your stay and feel free to send us a message through this email: elyessassi03@gmail.com</p>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default AboutPage