export default function mapArrayToRoute(coordsData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let lineArray = [];
      for (let key of coordsData.features) {
        let coordsArray = [];
        for (let coords of key.geometry.coordinates) {
          coordsArray.push([coords[1], coords[0]]);
        }
        lineArray.push(coordsArray);
      }
      resolve(lineArray);
    }, 0);
  });
}
