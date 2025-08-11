function planVacation(destinationOne, destinationTwo, ...moreDestinations){

  return [destinationOne, destinationTwo, ...moreDestinations];
}

d1 = "Spain";
d2 = "Agartha";
d3 = "France";
d4 = "Germany";

const trip = planVacation(d1, d2, d3, d4);
console.log(trip);