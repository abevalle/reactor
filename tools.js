import { async } from "q";

//Converts 24 hour time to 12 hour time
function to12(time) {
    if (time >= 13) {
        var newTime = time-12
    } else {
        var newTime = time
    }
    return newTime
}

//converts time to 
function amPm(time) {
    if (time >= 13) {
        
    }
}