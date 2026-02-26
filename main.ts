/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Illia
 * Created on: Feb 2026
 * This program: Temperature Kelvin
*/

let temperatureCelsius: number
let temperatureKelvin: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.B, function () {
    temperatureCelsius = input.temperature()
    temperatureKelvin = temperatureCelsius + 273.15
    temperatureKelvin = Math.round(temperatureKelvin)

    basic.clearScreen()
    basic.showString("The temperature is: " + temperatureKelvin.toString() + " K")
})
 

