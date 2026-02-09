import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"


function BackButton({onClick}) {
    return (<button className="bg-[#FFFFFF33] h-[50px] w-[50px] rounded-xl text-white hover:scale-120 transition shadow-md" onClick={onClick}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></button>)
}

export default BackButton