//NPM Packages
const ical = require('ical')
const date = new Date();
const express = require('express')
const app = express()
<<<<<<< HEAD
const port = 3005;
=======
const port = 3000;
>>>>>>> 769893ffa6b7b926f995bb4e5f915ecae3c3b274

const url = 'http://technexus.yarooms.com/ical/2dbc59mhcllvp56ejxt2o72vt.ics'

//downloads .ics file from ical
ical.fromURL(url, {}, function(err, data) {
    //converts ics to json and loops through json file.
    for (let k in data) {
        if  (err == !null) {
            console.log('[!]', err)
        };

        if (data.hasOwnProperty(k)) {
            const ev = data[k];
            //sets todays date as a comparator
            const today = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

            // This object contains event details
            let event = {
                'name': ev.summary,
                'description': ev.description,
                'location': ev.location,
                'date': {
                    'yyyy': ev.start.getFullYear(),
                    'mm': ev.start.getMonth(),
                    'dd': ev.start.getDate(),
                },
                'start': {
                    'hh': ev.start.getHours(),
                    'mm': ev.start.getMinutes(),
                    'ss': ev.start.getSeconds()
                },
                'end': {
                    'hh': ev.end.getHours(),
                    'mm': ev.end.getMinutes(),
                    'ss': ev.end.getSeconds()
                }
            }


            // This puts together event year, month, and day
            const evStartDate = `${event.date.yyyy}-${event.date.mm}-${event.date.dd}`

            // This if statement is to remove any events that are not today
            if (evStartDate == today ) {
<<<<<<< HEAD
                console.log(event)
=======
>>>>>>> 769893ffa6b7b926f995bb4e5f915ecae3c3b274

            }
        }
    }

});