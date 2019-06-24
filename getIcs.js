//NPM Packages
const ical = require('ical')
const date = new Date();
const express = require('express')
const app = express()
const port - 3000;

const url = 'http://technexus.yarooms.com/ical/2dbc59mhcllvp56ejxt2o72vt.ics'


//Converts 24 hour time to 12 hour time
function to12(time) {
    if (time >= 13) {
        var newTime = time-12
    } else {
        var newTime = time
    }
    return newTime
}

//downloads .ics file from ical
ical.fromURL(url, {}, function(err, data) {
    //converts ics to json and loops through json file.
    for (let k in data) {
        if (data.hasOwnProperty(k)) {
            const ev = data[k];
            //sets todays date as a comparator
            const today = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

            // This object contains event details
            const event = {
                "name": ev.summary,
                "description": ev.description,
                "location": ev.location,
                "date": {
                    'yyyy': ev.start.getFullYear(),
                    'mm': ev.start.getMonth(),
                    'dd': ev.start.getDate(),
                },
                "start": {
                    "hh": to12(ev.start.getHours()),
                    "mm": ev.start.getMinutes(),
                    "ss": ev.start.getSeconds()
                },
                "end": {
                    "hh": to12(ev.end.getHours()),
                    "mm": ev.end.getMinutes(),
                    "ss": ev.end.getSeconds()
                }
            }
             
            // This puts together event year, month, and day
            const evStartDate = `${event.date.yyyy}-${event.date.mm}-${event.date.dd}`

            // This if statement is to remove any events that are not today
            if (evStartDate == today ) {
                //This publishes to the api

            }
        }
    }

});
