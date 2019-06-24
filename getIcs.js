const fs = require('fs');
const download = require('download');
const ical = require('ical')
const date = new Date();
const url = 'http://technexus.yarooms.com/ical/2dbc59mhcllvp56ejxt2o72vt.ics'


ical.fromURL(url, {}, function(err, data) {
    for (let k in data) {
        if (data.hasOwnProperty(k)) {
            var ev = data[k];

            var evstart = `${ev.start.getFullYear()}-${ev.start.getMonth()}-${ev.start.getDate()}`
            var today = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
        }

        if (evstart !== '2019-5-24' ) {
        } else {
            const evName = ev.summary;
            const evLocation = ev.location;
            const evStart = ev.start;
            const evEnd = ev.end;
        }

    }
})