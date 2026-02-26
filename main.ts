/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Illia
 * Created on: Feb 2026
 * This program: Temperature Kelvin
*/
let temperatureCelsius: number = 0
let temperatureKelvin: number = 0

basic.clearScreen();
basic.showIcon(IconNames.Happy);

input.onButtonPressed(Button.B, function () {
    temperatureCelsius = input.temperature();
    temperatureKelvin = Math.round(temperatureCelsius + 273.15);

    basic.clearScreen();
    basic.showString("The temperature is: " + temperatureKelvin + " K");
});
 

