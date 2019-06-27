const { Pool, Client } = require('pg')
const { ics } = require('../reactor/getIcs');
const date = new Date()
const pool = new Pool({
    user: 'abe',
    host: 'localhost',
    database: 'ciris',
    password: 'popeysnotkfc',
    port: 5432
});
let events = "";

function cal() {
    return new Promise(resolve => {
        resolve(ics())
    });
}

async function call() {
    const result = await cal();
    const asnycEvents = result;
    let data = asnycEvents;

    for (let k in data) {
        if (data.hasOwnProperty(k)) {
            let ev = data[k]

            let name = ev.name
            let desc = ev.description
            let location = ev.location
            let date = `${ev.date.yyyy}-${ev.date.mm}-${ev.date.dd}`
            let start = `${ev.start.hh}:${ev.start.mm}:${ev.start.ss}`
            let end = `${ev.end.hh}:${ev.end.mm}:${ev.end.ss}`

            //sets todays date as a comparator
            //const today = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

            


        }
    }
}

call();
