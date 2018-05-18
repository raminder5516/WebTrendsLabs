enum days{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

enum months{
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

enum earthPhysics{
    gravity = 9.81,
    c = Math.pow(3.88, 8),
    weight = 1
}

//html elements
let pTodayDate = document.getElementById("p--today-date");

//today as a date
let today : Date = new Date();

console.log(today.getMonth());

pTodayDate.innerHTML = 'Today is ${days[today.getDay()]} ${months[today.getMonth()]} ${today.getDate()},b${today.getFullYear()}';

console.log(today);

days.Sunday;