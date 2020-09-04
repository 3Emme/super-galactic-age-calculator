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
    this.marsExpec = Math.floor(earthExpec * 1.88),
    this.marsRemain = this.marsExpec - this.marsAge,
    this.jupiterAge = Math.floor(earthAge * 11.86),
    this.jupiterExpec = Math.floor(earthExpec * 11.86),
    this.jupiterRemain = this.jupiterExpec - this.jupiterAge,
    this.solarText = `The average life expectancy for your demographic on Earth is ${this.earthExpec}, and you're currently ${this.earthAge} years old. You've got ${this.earthRemain} more years to go!
      
    On Mercury the average life expectancy for your demographic is ${this.mercuryExpec}, and you're currently ${this.mercuryAge} years old (in Mercury years of course). You've got ${this.mercuryRemain} more Mercury years to go!

    On Venus the average life expectancy for your demographic is ${this.venusExpec}, and you're currently ${this.venusAge} years old (in Venus years of course). You've got ${this.venusRemain} more Venus years to go!

    On Mars the average life expectancy for your demographic is ${this.marsExpec}, and you're currently ${this.marsAge} years old (in Mars years of course). You've got ${this.marsRemain} more Mars years to go!
    
    On Jupiter the average life expectancy for your demographic is ${this.jupiterExpec}, and you're currently ${this.jupiterAge} years old (in Jupiter years of course). You've got ${this.jupiterRemain} more Jupiter years to go!`
  }
}