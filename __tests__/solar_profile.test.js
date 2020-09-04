import SolarProfile from '../src/js/solar_profile.js';

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

  test('Test 3: Should calculate mercuryAge property value from earthAge and earthExpec property values', () =>{    
    expect(profile1.mercuryAge).toEqual(6);
  });
});