/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus, 
    knowsProgramming,
    config 
    ) {
      let hourToWeek;

      if (knowsProgramming == true) {hourToWeek =800} 
        else {hourToWeek =1300};
         
      let time=hourToWeek/config[focus];

      return Math.ceil(time)
  
  };
  