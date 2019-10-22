// Code your solution in this file!


function returnFirstTwoDrivers(){
  //const anonymous
  const drivers = ['Sally','Bob', 'Freddy', 'Cladia']
  return [
      drivers[0],
      drivers[1]
    ]

}
function returnLastTwoDrivers() {
  const drivers = ['Sally','Bob', 'Freddy', 'Claudia']
  return [drivers[2], drivers[3]]

}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(){

}
function fareDoubler(){

}

function fareTripler(){

}
//This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. If createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.
//fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.
//fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.
//selectDifferentDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.
