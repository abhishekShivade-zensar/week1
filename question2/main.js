const daysInYear = 365.25;
const daysInWeek = 7;
const yearsInLifetime = 80;

function calculate(){

    let daysInLife = yearsInLifetime*daysInYear;

    let WeeksInLife = daysInLife/daysInWeek;

    document.getElementById("life").innerHTML= WeeksInLife;


}