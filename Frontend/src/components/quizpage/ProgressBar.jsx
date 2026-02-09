function ProgressBar({currentSlideNum, totalSlideNum}) {
    return <div className="w-[100%] h-[10px] bg-[#00071D] rounded-4xl flex items-center relative"><div className={`h-[10px] bg-[#89E88C] absolute top-0 left-0 rounded-4xl`} style={{width: `${currentSlideNum / totalSlideNum * 100}%`}}></div></div>
}

export default ProgressBar