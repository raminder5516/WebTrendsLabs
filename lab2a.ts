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
let buttonBirthday = document.getElementById("button--birthday");
let pBirthdayMessage = document.getElementById("p--birthday-message");
let inputDatePicker = document.getElementById("input--date-picker");

//today as a date
let today : Date = new Date();

console.log(today.getMonth());

pTodayDate.innerHTML = `Today is ${days[today.getDay()]} ${months[today.getMonth()]} ${today.getDate()},${today.getFullYear()}`;

console.log(today);

//days.Sunday;

//part 2
buttonBirthday.onclick = function(){
    //get birthday from input tag
    let userBDay : string = inputDatePicker.value;
    let userBDayDate : Date = new Date(userBDay);

    pBirthdayMessage.innerHTML = makeDateString(userBDayDate);
}
//function
function makeDateString(inputDate : Date) : string{
    //if today is user's birthday
    if((inputDate.getDate()=== today.getDate())
       &&
       (inputDate.getMonth()=== today.getMonth())
){
    return `Happy Birthday`;
}

//if birthday is not today
let thisYearsBirthday = new Date();
thisYearsBirthday.setDate(inputDate.getDate());
thisYearsBirthday.setFullYear(today.getFullYear());
thisYearsBirthday.setMonth(inputDate.getMonth());

 return `Your birthday is ${days[thisYearsBirthday.getDay()]} ${months[inputDate.getMonth()]} ${inputDate.getDate()}, ${today.getFullYear()}`
}

