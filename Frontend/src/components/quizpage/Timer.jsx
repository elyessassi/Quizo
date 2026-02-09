import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAlarmClock } from "@fortawesome/free-solid-svg-icons"

function Timer({time}){
    

    return(<div className="h-[50px] w-[80px] rounded-3xl bg-[#FFFFFF33] flex justify-evenly shadow-md items-center">
            <FontAwesomeIcon icon={faAlarmClock} className="text-white"></FontAwesomeIcon>
            <p className="text-white">{time}</p>
        </div>)
}

export default Timer