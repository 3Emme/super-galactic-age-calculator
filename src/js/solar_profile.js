export default class SolarProfile {
  constructor(earthAge,earthExpec){
    this.earthAge = earthAge,
    this.earthExpec = earthExpec,
    this.earthRemain = earthExpec - earthAge
  }
}