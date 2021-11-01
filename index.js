// Code your solution in this file!
const returnFirstTwoDrivers = function (array){
    return array.slice(0,2);
}
const returnLastTwoDrivers = function (array){
    return array.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(num){
    return function (fare){
        return fare * num;
    }
}

const ride = createFareMultiplier();
function fareDoubler(ride){
    return ride * 2;
}
function fareTripler(ride){
    return ride * 3;
}

const selectDifferentDrivers = (arraydrivers,fn) => fn(arraydrivers);
