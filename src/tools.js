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

const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// This puts together event year, month, and day
const evStartDate = `${events.date.yyyy}-${events.date.mm}-${events.date.dd}`

//sets todays date as a comparator
const today = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

// This if statement is to remove any events that are not today
if (evStartDate == '2019-5-27') {
    return events
}