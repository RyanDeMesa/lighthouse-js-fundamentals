const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
function chooseStations(stations){
  const goodStations = [] 
  for(let i = 0; i < stations.length; i++){
    const capacity = stations[i][1]
    const location = stations[i][2]
    if (capacity >= 20 ){
      if (location === 'school' || location === 'community centre'){
        goodStations.push(stations[i][0])
      }
    }
  }
  return goodStations
}
  
console.log(chooseStations(stations))