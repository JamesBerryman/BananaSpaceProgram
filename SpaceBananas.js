var nanas = 0
var nanasToMoon = 1753963200
var nanasToUK = 4800

var today = new Date()

const start = new Date("01/01/2021")

let loop = new Date(start);
while (loop <= today) {
    nanas = nanas + 1.25
    let newDate = loop.setDate(loop.getDate() + 1);
    loop = new Date(newDate);
}
//TotalMiles
var todaysMiles = nanasToUK * nanas


//Trips to Moon
var moonTrip = 238885
compMoonTrip = todaysMiles / moonTrip
var moon = compMoonTrip.toFixed(1);


//AddSubtract
var addDate = today.setDate(today.getDate() + 1);
console.log(addDate)
