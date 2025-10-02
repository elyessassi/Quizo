import Navbar from "../components/Nabvar"
import Footer from "../components/Footer"
import Button from "../components/Button"
import Modal from "../components/Modal"


function WelcomePage(){

    return(
        <>
            
            <Navbar></Navbar>
            <section>
                <div className="h-[50.625rem] bg-[#FFF2EF] w-screen z-10 lg:h-[37.625rem] text-center flex justify-center items-center">
                    <div className="mx-[3rem] flex flex-col items-center z-10 lg:flex-row lg:items-center lg:justify-between lg:mx-[15.25rem] flex-grow">
                        <div className="flex flex-col items-center lg:items-start">
                            <h1 className="text-[2.375rem] font-IrishGrover md:text-[3.375rem]">Refresh Your Knowledge</h1>
                            <p className="mt-[1.875rem] text-center font-IrishGrover text-[1.25rem] text-[#6D6D6D] lg:text-start w-[28rem]">Refresh Your Knowledge by revisiting what you’ve learned and discovering new insights.</p>
                            <div className="mt-[3.75rem]"></div>
                            <Button name="Join us"></Button>
                        </div>
                        <img src="src\assets\welcomeImg\image1.png" className="mt-[5.625rem] h-auto w-[15rem] rounded-[28px] object-fill"></img>
                    </div>
                </div>
            </section>
            <section className="w-screen">
                <div className="h-[45rem] bg-[#FFFFFF] w-screen z-10 lg:h-[32rem] border-t-2 border-b-2 border-[#7C7C7C] flex items-center justify-center">
                    <div className="mx-[3rem] flex flex-col items-center z-10 lg:flex-row-reverse lg:items-center lg:justify-between lg:mx-[15.25rem] flex-grow">
                        <div className="flex flex-col items-center lg:items-start lg:ml-[2rem]">
                            <h1 className="text-[2.375rem] font-IrishGrover md:text-[3.375rem]">Your Quiz, Your Way</h1>
                            <p className="mt-[1.875rem] text-center font-IrishGrover text-[1.25rem] text-[#6D6D6D] lg:text-start w-[28rem]">Turn any topic into an engaging quiz to build custom learning experiences that educate and entertain.</p>
                            <div className="mt-[3.75rem]"></div>
                            <Button name="Create Quiz"></Button>
                        </div>
                        <img src="src\assets\welcomeImg\image2.png" className="mt-[5.625rem] h-auto w-[15rem] rounded-[28px] object-fill"></img>
                    </div>
                </div>
            </section>
            <section>
                <div className="h-[45rem] bg-[#FFF2EF] w-screen z-10 lg:h-[32rem] flex items-center justify-center">
                    <div className="mx-[3rem] flex flex-col items-center z-10 lg:flex-row lg:items-center lg:justify-between lg:mx-[15.25rem] flex-grow">
                        <div className="flex flex-col items-center lg:items-start">
                            <h1 className="text-[2.375rem] font-IrishGrover md:text-[3.375rem]">Explore Endless Quizzes</h1>
                            <p className="mt-[1.875rem] text-center font-IrishGrover text-[1.25rem] text-[#6D6D6D] lg:text-start w-[28rem]">Dive into a vast collection of quizzes covering every topic imaginable. From science to pop culture, there's always something new to discover.</p>
                            <div className="mt-[3.75rem]"></div>
                            <Button name="Browse"></Button>
                        </div>
                        <img src="src\assets\welcomeImg\image3.png" className="mt-[5.625rem] h-auto w-[15rem] rounded-[28px] object-fill"></img>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default WelcomePage