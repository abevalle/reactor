//NPM Packages
const ical = require('ical')
const date = new Date();

const url = 'https://variadiq.yarooms.com/ical/eta87dxzdzd2bapmhhp313dhy.ics'
//sets todays date as a comparator
const today = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
const events = {};


export function ics() {
    //downloads .ics file from ical
    ical.fromURL(url, {}, function (err, data) {
        let i = 0
        //converts ics to json and loops through json file.
        for (let k in data) {
            if (data.hasOwnProperty(k)) {                
                const ev = data[k];
                // This object contains event details
                events[i++] = {
                    "name": ev.summary,
                    "description": ev.description,
                    "location": ev.location,
                    "date": {
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
                //const evStartDate = `${events.date.yyyy}-${events.date.mm}-${events.date.dd}`

                // This if statement is to remove any events that are not today
                //if (evStartDate == '2019-5-27') {
                    //return events
                //}

            }
        }
        return events
    });

}
