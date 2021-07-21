
function leapYear(year){
        
        let result = year%4;

        if (result == 0){
          return true;
        }
        else{
            return false;
        }
    }
var finalAns = leapYear(2024);
console.log(finalAns);

