
export function getCookieValue(name){
    let cookiesList = document.cookie.split(";")
    for (let i = 0; i < cookiesList.length; i++){
        if (cookiesList[i].startsWith(name)){
            let tokenCookie = cookiesList[i]
            return(tokenCookie.slice(12, tokenCookie.length))
        }
    }
    return(null)
}