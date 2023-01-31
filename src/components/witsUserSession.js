import { witsHTTPEndpoints } from "./witsHTTPEndpoints";

function getCookie(name) {
    var cookieArr = document.cookie.split(";");
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

// witsUser=userId en tant que cookie

export function witslogin(x){
    document.cookie="witsUser="+x+";";
}

export function witslogout(){
    document.cookie="witsUser=;";
}

export function witsisLoged(){
    return getCookie("witsUser")!==""?true:false
}

export function witsgetUserId(){
    return getCookie("witsUser")?getCookie("witsUser"):"";
}

export async function witsgetfullname(){
    let x =  await (await fetch(witsHTTPEndpoints.getCurrentUserFullName+"/"+witsgetUserId())).json()
    return x.fullName;
}

