# __Super Galactic Age Calculator__

#### __An application which a user can use to determine their solar age and their remaining life expectancy, should they live on other planets. September 4, 2020__

#### By _**Emme Buentiempo**_

## Description

This application was created as an Epicodus assignment, with the intent to have it serve as a demonstration of knowledge after the program's fifth week. For the time being this README will serve as a checklist to demonstrate the satisfaction of all project requirements and objectives. 

[Link to live website](http://3emme.github.io/super-galactic-age-calculator/)

## Project requirements:

A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days. Write an application that determines a user's age based on a planet's solar years.

You are not required to build a UI for this application. Instead, focus on thoroughly testing each piece of functionality. Make sure to commit a TDD spec before writing the corresponding method; in this way, you'll be following a Red, Green, Refactor workflow. Remember to include at least one test for each spec and that, typically, we'll only want one expectation per test.

The business logic of your application should:

Take a person's age in years and create a class that does the following: **[Complete]**

  * Returns their age in Mercury years. (A Mercury year is .24 Earth years.) **[Complete]**
  * Returns their age in Venus years. (A Venus year is .62 Earth years.) **[Complete]**
  * Returns their age in Mars years. (A Mars year is 1.88 Earth years.) **[Complete]**
  * Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.) **[Complete]**
  * Determines how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user's life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy. **[Complete]**
  * If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy. **[Complete]**

## Project Objectives:

  * Code meets standards from previous weeks. **[TBD]**
  * Business logic is thoroughly tested with Jest. **[Complete]**
  * Each spec was committed before writing its corresponding code. **[Complete]**
  * Project utilizes ES6 features including classes and template literals. **[TBD]**
  * Dependencies are managed with npm. **[Complete]**
  * webpack is used to lint, bundle, and process code. **[Complete]**
  * Project is in a polished, portfolio-quality state. **[Complete]**
  * Required functionality was in place by the Friday deadline. **[Complete]**
  * Project demonstrates understanding of week's concepts. If prompted, you are able to discuss your code with an instructor using correct terminology. **[Complete]**

  _For reference, here are last week's standards:_

  * Project is in a presentable, portfolio-quality state.  **[Complete]**
  * Code is clean, well-refactored, and easy-to-read. This includes correct indendation, spacing, and including only necessary comments and debugging tools.  **[Complete]**
  * Variable names are descriptive and use lower camel case (e.g. myVariableExample).  **[Complete]**
  * JavaScript business logic and user interface logic are separate.  **[Complete]**
  * Tests are included for each behavior and code is committed after each test passes.  **[Complete]**
  * Commits are made regularly with clear messages that finish the phrase "It will…".  **[Complete]**
  * Project README that includes, bare minimum:
    * author name  **[Complete]**
    * program name  **[Complete]**
    * detailed setup instructions  **[TBD]**
    * description  **[Complete]**
    * copyright and license information  **[Complete]**

## Business Specs

  1.[X] Given input from the user for their age and demographic's average life expectancy, create a object for their 'solar profile' using the input from the form to populate the values of the 'earthAge' and 'earthExpec' properties.
    * Input: profile1 = new SolarProfile(28,35)
    * Output: 
      profile1 = {
      earthAge: 28,
      earthExpec: 35
      };

  2.[X] Calculate expected remaining life in Earth years given the 'earthAge' and 'earthExpec' value, and include a 'earthRemain' property to the solarProfile object to reflect the difference between the life expectancy and the current age of the user in Earth years (value to be positive or negative depending on whether the age surpasses the expectancy value) with these values.
    * Input: profile1 = new SolarProfile(28,35)
    * Output: 
      profile1 = {
      earthAge: 28,
      earthExpec: 35,
      earthRemain: 7
      }; 

  3.[X] Calculate age in Mercury years given the earthAge value, and include a 'mercuryAge' property to the solarProfile object with this value.
    * Input: profile1 = new SolarProfile(28,35)
    * Output: 
      profile1 = {
      earthAge: 28,
      earthExpec: 35,
      earthRemain: 7,
      mercuryAge: 6
      }; 

  4.[X] Calculate life expectancy in Mercury years given the earthExpec value, and include a 'mercuryExpec' property to the solarProfile object with this value.
    * Input: profile1 = new SolarProfile(28,35)
    * Output: 
      profile1 = {
      earthAge: 28,
      earthExpec: 35,
      earthRemain: 7,
      mercuryAge: 6,
      mercuryExpec: 8
      };

  5.[X] Calculate expected remaining life in Mercury years given the 'mercuryAge' and 'mercuryExpec' value, and include a 'mercuryRemain' property to the solarProfile object to reflect the difference between the life expectancy and the current age of the user in Mercury years (value to be positive or negative depending on whether the age surpasses the expectancy value) with these values.
    * Input: profile1 = new SolarProfile(28,35)
    * Output: 
      profile1 = {
      earthAge: 28,
      earthExpec: 35,
      earthRemain: 7,
      mercuryAge: 6,
      mercuryExpec: 8,
      mercuryRemain: 2
      }; 

  6.[X] Replicate the behaviors of specs 3-5 for Venus in place of Mercury, adding to the solarProfile object properties and values.
    * Input: profile1 = new SolarProfile(28,35)
    * Output: 
      profile1 = {
      earthAge: 28,
      earthExpec: 35,
      earthRemain: 7,
      mercuryAge: 6,
      mercuryExpec: 8,
      mercuryRemain: 2,
      venusAge: 17,
      venusExpec: 21,
      venusRemain: 4
      }; 

  7.[X] Replicate the behaviors of specs 3-5 for Mars in place of Mercury, adding to the solarProfile object properties and values.
    * Input: profile1 = new SolarProfile(28,35)
    * Output: 
      profile1 = {
      earthAge: 28,
      earthExpec: 35,
      earthRemain: 7,
      mercuryAge: 6,
      mercuryExpec: 8,
      mercuryRemain: 2,
      venusAge: 17,
      venusExpec: 21,
      venusRemain: 4,
      marsAge: 52,
      marsExpec: 65,
      marsRemain: 13
      }; 

  8.[X] Replicate the behaviors of specs 3-5 for Jupiter in place of Mercury, adding to the solarProfile object properties and values.
    * Input: profile1 = new SolarProfile(28,35)
    * Output: 
      profile1 = {
      earthAge: 28,
      earthExpec: 35,
      earthRemain: 7,
      mercuryAge: 6,
      mercuryExpec: 8,
      mercuryRemain: 2,
      venusAge: 17,
      venusExpec: 21,
      venusRemain: 4,
      marsAge: 52,
      marsExpec: 65,
      marsRemain: 13,
      jupiterAge: 332,
      jupiterExpec: 415,
      jupiterRemain: 83
      }; 

  9.[X] Create a block of text populated with the solarProfile object properties and values.
    * Input: profile1 = new SolarProfile(28,35)
    * Output: 
      profile1 = {
      earthAge: 28,
      earthExpec: 35,
      earthRemain: 7,
      mercuryAge: 6,
      mercuryExpec: 8,
      mercuryRemain: 2,
      venusAge: 17,
      venusExpec: 21,
      venusRemain: 4,
      marsAge: 52,
      marsExpec: 65,
      marsRemain: 13,
      jupiterAge: 332,
      jupiterExpec: 415,
      jupiterRemain: 83,
      solarText: 
      `The average life expectancy for your demographic on Earth is 35, and you're currently 28 years old. You've got 7 more years to go!
      
      On Mercury the average life expectancy for your demographic is 8, and you're currently 6 years old (in Mercury years of course). You've got 2 more Mercury years to go!

      On Venus the average life expectancy for your demographic is 21, and you're currently 17 years old (in Venus years of course). You've got 4 more Venus years to go!

      On Mars the average life expectancy for your demographic is 65, and you're currently 52 years old (in Mars years of course). You've got 13 more Mars years to go!
      
      On Jupiter the average life expectancy for your demographic is 415, and you're currently 332 years old (in Jupiter years of course). You've got 83 more Jupiter years to go!`
      };

## UI Specs

## Setup/Installation Requirements

* _open terminal_
* _type "cd desktop", then press enter_
* _type "git clone https://github.com/3emme/super-galactic-age-calculator", then press enter_
* _locate and open folder on desktop named "super-galactic-age-calculator"_
* _open the file named "index.html"_ **[May need correction]**

## Support and contact details

_Please do not hesitate to contact me at emmettbuentiempo@gmail.com should you have any questions regarding this project_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _jQuery_ **[May need correction]**

### License

Copyright (c) 2020 **_Emme Buentiempo_**
This software is licensed under the MIT license.