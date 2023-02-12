const convertToCelsius = function(temperature_f) {
  celsius_temp = (temperature_f - 32) / 1.8

  celsius_rounded = Math.round(celsius_temp * 10) / 10

  return celsius_rounded
};

const convertToFahrenheit = function(temperature_c) {
    f_temp = (temperature_c * 1.8) + 32
    f_temp_rounded = Math.round(f_temp * 10) /10
    return f_temp_rounded
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
