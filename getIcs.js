const ical = require('ical')

const url = 'https://variadiq.yarooms.com/ical/eta87dxzdzd2bapmhhp313dhy.ics'

let events = {};

function getCal() {
    return new Promise(resolve => {
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
                }
            }
            resolve(events)
        });
    });
}

module.exports = {
        ics: async function() {
        var result = await getCal();
            return result
    }
}
