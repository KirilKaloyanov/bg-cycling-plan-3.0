export default function mapArrayToRoute(coordsData) {
    let lineArray = [];
    for (let key of coordsData.features) {
      let coordsArray = [];
      for (let coords of key.geometry.coordinates) {
        coordsArray.push([coords[1], coords[0]]);
      }
      lineArray.push(coordsArray);
    }
    return lineArray;
  }