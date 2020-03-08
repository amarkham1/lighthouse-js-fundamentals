const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  const results = [];
  for (const station of stations) {
    const type = station[2];
    const capacity = station[1];
    if(capacity >= 20) {
      if (type === "community centre" || type === "school") {
        results.push(station[0]);
      }
    }
  }
  return results;
}



console.log(chooseStations(stations));