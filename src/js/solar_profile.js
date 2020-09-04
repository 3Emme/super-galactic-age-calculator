export default class SolarProfile {
  constructor(earthAge,earthExpec){
    this.earthAge = earthAge,
    this.earthExpec = earthExpec,
    this.earthRemain = earthExpec - earthAge,
    this.mercuryAge = Math.floor(earthAge * .24),
    this.mercuryExpec = Math.floor(earthExpec * .24),
    this.mercuryRemain = this.mercuryExpec - this.mercuryAge
  }
}