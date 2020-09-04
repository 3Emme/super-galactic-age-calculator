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

Take a person's age in years and create a class that does the following: **[TBD]**

  * Returns their age in Mercury years. (A Mercury year is .24 Earth years.) **[TBD]**
  * Returns their age in Venus years. (A Venus year is .62 Earth years.) **[TBD]**
  * Returns their age in Mars years. (A Mars year is 1.88 Earth years.) **[TBD]**
  * Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.) **[TBD]**
  * Determines how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user's life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy. **[TBD]**
  * If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy. **[TBD]**

## Project Objectives:

  * Code meets standards from previous weeks. **[TBD]**
  * Business logic is thoroughly tested with Jest. **[TBD]**
  * Each spec was committed before writing its corresponding code. **[TBD]**
  * Project utilizes ES6 features including classes and template literals. **[TBD]**
  * Dependencies are managed with npm. **[TBD]**
  * webpack is used to lint, bundle, and process code. **[TBD]**
  * Project is in a polished, portfolio-quality state. **[TBD]**
  * Required functionality was in place by the Friday deadline. **[TBD]**
  * Project demonstrates understanding of week's concepts. If prompted, you are able to discuss your code with an instructor using correct terminology. **[TBD]**

  _For reference, here are last week's standards:_

  * Project is in a presentable, portfolio-quality state.  **[TBD]**
  * Code is clean, well-refactored, and easy-to-read. This includes correct indendation, spacing, and including only necessary comments and debugging tools.  **[TBD]**
  * Variable names are descriptive and use lower camel case (e.g. myVariableExample).  **[TBD]**
  * JavaScript business logic and user interface logic are separate.  **[TBD]**
  * Tests are included for each behavior and code is committed after each test passes.  **[TBD]**
  * Commits are made regularly with clear messages that finish the phrase "It will…".  **[TBD]**
  * Project README that includes, bare minimum:
    * author name  **[TBD]**
    * program name  **[TBD]**
    * detailed setup instructions  **[TBD]**
    * description  **[TBD]**
    * copyright and license information  **[TBD]**

## Specs for Program Behaviors

  1.[X] Given input from the user for their age and demographic's average life expectancy, create a object for their 'solar profile' using the input from the form to populate the values of the 'earthAge' and 'earthExpec' properties.
    * Input: profile1 = new SolarProfile(28,35)
    * Output: 
      profile1 = {
      earthAge: 28,
      earthExpec: 35
      };

  2.[] Calculate expected remaining life in Earth years given the 'earthAge' and 'earthExpec' value, and include a 'earthRemain' property to the solarProfile object to reflect the difference between the life expectancy and the current age of the user in Earth years (value to be positive or negative depending on whether the age surpasses the expectancy value) with these values.
    * Input: profile1 = new SolarProfile(28,35)
    * Output: 
      profile1 = {
      earthAge: 28,
      earthExpec: 35,
      earthRemain: 7
      }; 

  3.[] Calculate age in Mercury years given the earthAge value, and include a 'mercuryAge' property to the solarProfile object with this value.
    * Input: profile1 = new SolarProfile(28,35)
    * Output: 
      profile1 = {
      earthAge: 28,
      earthExpec: 35,
      earthRemain: 7,
      mercuryAge: 6
      }; 

  4.[] Calculate life expectancy in Mercury years given the earthExpec value, and include a 'mercuryExpec' property to the solarProfile object with this value.
    * Input: profile1 = new SolarProfile(28,35)
    * Output: 
      profile1 = {
      earthAge: 28,
      earthExpec: 35,
      earthRemain: 7,
      mercuryAge: 6,
      mercuryExpec: 8
      };

  5.[] Calculate expected remaining life in Mercury years given the 'mercuryAge' and 'mercuryExpec' value, and include a 'mercuryRemain' property to the solarProfile object to reflect the difference between the life expectancy and the current age of the user in Mercury years (value to be positive or negative depending on whether the age surpasses the expectancy value) with these values.
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

  6.[] Replicate the behaviors of specs 3-5 for Venus in place of Mercury, adding to the solarProfile object properties and values.
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

  7.[] Replicate the behaviors of specs 3-5 for Mars in place of Mercury, adding to the solarProfile object properties and values.
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

  8.[] Replicate the behaviors of specs 3-5 for Jupiter in place of Mercury, adding to the solarProfile object properties and values.
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