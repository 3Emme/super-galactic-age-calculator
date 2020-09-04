export default class SolarProfile {
  constructor(earthAge,earthExpec){
    this.earthAge = earthAge,
    this.earthExpec = earthExpec,
    this.earthRemain = earthExpec - earthAge,
    this.mercuryAge = Math.floor(earthAge * .24),
    this.mercuryExpec = Math.floor(earthExpec * .24),
    this.mercuryRemain = this.mercuryExpec - this.mercuryAge,
    this.venusAge = Math.floor(earthAge * .62),
    this.venusExpec = Math.floor(earthExpec * .62),
    this.venusRemain = this.venusExpec - this.venusAge,
    this.marsAge = Math.floor(earthAge * 1.88),
    this.marsExpec = Math.floor(earthExpec * 1.88)
  }
}