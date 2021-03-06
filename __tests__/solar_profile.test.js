import { SolarProfile } from '../src/js/solar_profile.js';

describe('SolarProfile', () => {
  let profile1; 
  beforeEach(() => {
    profile1 = new SolarProfile(28,35)
});

  test('Test 1: Should create a SolarProfile object, and populate properties with values given', () =>{    
    expect(profile1.earthAge).toEqual(28);
  });

  test('Test 2: Should calculate earthRemain property value from earthAge and earthExpec property values', () =>{    
    expect(profile1.earthRemain).toEqual(7);
  });

  test('Test 3: Should calculate mercuryAge property value from earthAge property value', () =>{    
    expect(profile1.mercuryAge).toEqual(6);
  });

  test('Test 4: Should calculate mercuryExpec property value from earthExpec property value', () =>{    
    expect(profile1.mercuryExpec).toEqual(8);
  });

  test('Test 5: Should calculate mercuryRemain property value from mercuryAge and mercuryExpec property values', () =>{    
    expect(profile1.mercuryRemain).toEqual(2);
  });

  test('Test 6: Should calculate venusAge property value from earthAge property value', () =>{    
    expect(profile1.venusAge).toEqual(17);
  });

  test('Test 7: Should calculate venusExpec property value from earthExpec property value', () =>{    
    expect(profile1.venusExpec).toEqual(21);
  });

  test('Test 8: Should calculate venusRemain property value from venusAge and venusExpec property values', () =>{    
    expect(profile1.venusRemain).toEqual(4);
  });

  test('Test 9: Should calculate marsAge property value from earthAge property value', () =>{    
    expect(profile1.marsAge).toEqual(52);
  });

  test('Test 10: Should calculate marsExpec property value from earthExpec property value', () =>{    
    expect(profile1.marsExpec).toEqual(65);
  });

  test('Test 11: Should calculate marsRemain property value from marsAge and marsExpec property values', () =>{    
    expect(profile1.marsRemain).toEqual(13);
  });

  test('Test 12: Should calculate jupiterAge property value from earthAge property value', () =>{    
    expect(profile1.jupiterAge).toEqual(332);
  });
  
  test('Test 13: Should calculate jupiterExpec property value from earthExpec property value', () =>{    
    expect(profile1.jupiterExpec).toEqual(415);
  });

  test('Test 14: Should calculate jupiterRemain property value from jupiterAge and jupiterExpec property values', () =>{    
    expect(profile1.jupiterRemain).toEqual(83);
  });

  test('Test 15: Should create a block of text populated with the solarProfile object properties and values', () =>{    
    expect(profile1.solarText).toMatch(`On Jupiter the average life expectancy for your demographic is 415, and you're currently 332 years old (in Jupiter years of course). You've got 83 more Jupiter years to go!`);
  });

  test('Test 16: Should populate one of two blocks of text populated with the solarProfile object properties and values, dependant on whether the earthRemain value is positive or negative', () =>{   
    let profile2 = new SolarProfile(42,35); 
    expect(profile2.solarText).toMatch(`On Jupiter the average life expectancy for your demographic is 415, and you're currently 498 years old (in Jupiter years of course). You must be kidding, because that's a whopping 83 Jupiter years beyond the average!`);
  });
});