
function Footer(){

    return(<>
        <footer >
            <div className="w-screen h-100 flex-col flex bg-[#5D688A] pt-[2.8125rem] md:pt-0 md:flex-row md:h-[9.375rem] md:justify-between">
                <div className="flex-col  flex justify-center items-center md:ml-[11.25rem]">
                    <h1 className="text-[1.875rem] md:text-[1.6rem] font-IrishGrover text-white">Sitemap</h1>
                    <ul className="flex flex-col justify-center items-center">
                        <a href="#"><li className="text-[1.25rem] font-IrishGrover text-white transition hover:scale-110 md:text-[1rem]">Quizzes</li></a>
                        <a href="#"><li className="text-[1.25rem] font-IrishGrover text-white transition hover:scale-110 md:text-[1rem]">Profile</li></a>
                        <a href="#"><li className="text-[1.25rem] font-IrishGrover text-white transition hover:scale-110 md:text-[1rem]">About us</li></a>
                    </ul>
                </div>
                <div className="mt-[2.8125rem] flex flex-col items-center md:mt-0 md:justify-center md:mr-[11.25rem]">
                    <h1 className="text-[2.25rem] text-white font-Billabong">Quizo</h1>
                    <p className="text-white font-IrishGrover">Contact: elyessassi03@gmail.com</p>
                </div>
            </div>
            <div className="bg-[#6F7B9E] flex justify-center items-center h-[2.8125rem] w-screen">
                <p className="text-white opacity-50 text-[0.8rem]">Copyright: All rights reserved</p>
            </div>
        </footer>

    </>)
}

export default Footer