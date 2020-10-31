function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(obj => {
    return {
      name: obj.name,
      orbitalPeriod: Math.round(
        2*Math.PI * Math.sqrt(
          Math.pow(earthRadius + obj.avgAlt, 3) / GM
        )
      )
    }
  });
}

const GM = 398600.4418;
const earthRadius = 6367.4447;

const orbitalPeriod = arr =>  arr.map(obj => ({     
      name: obj.name,
      orbitalPeriod: Math.round(
        2*Math.PI * Math.sqrt(
          Math.pow(earthRadius + obj.avgAlt, 3) / GM
        )
      )
    }
  ));
