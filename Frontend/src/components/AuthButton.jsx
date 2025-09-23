import { useNavigate } from "react-router-dom"

function AuthButton({name, Values, setError ,isLogin, setShowSuccess}){
    let navigate = useNavigate()

    async function SendSignUpReq(Values ,setError, setShowSuccess){
        let result = await fetch("http://localhost:5001/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(Values)
        })
        let data = await result.json()
        if (result.status != 200){
            setError(data.message)
        }
        else{
            console.log(data.accessToken)
            setShowSuccess(true)
            document.cookie = `accessToken=${data.accessToken}`
            navigate("/Home")
        }
    }


    async function SendLogInReq(Values ,setError, setShowSuccess){
        let result = await fetch("http://localhost:5001/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(Values)
        })
        let data = await result.json()
        if (result.status != 200){
            setError(data.message)
        }
        else{
            console.log(data.accessToken)
            setShowSuccess(true)
            document.cookie = `accessToken=${data.accessToken}`
            navigate("/Home")
        }
    }



    return(<>
            <div className="h-[3.5rem] w-[25rem] rounded-[9px] shadow-[0px_8px_0px_rgba(0,151,138,1)] ">
                <button onClick={isLogin ? () => {SendLogInReq(Values, setError, setShowSuccess)} : () => {SendSignUpReq(Values, setError, setShowSuccess)}} className=" text-white text-[1.3rem] font-IrishGrover   transition active:translate-y-1 h-[3.5rem] w-[25rem] bg-[#00B0A2] rounded-[9px] hover:bg-[#00B5A6]">
                    {name}
                </button>
            </div>
            </>)
}

export default AuthButton





