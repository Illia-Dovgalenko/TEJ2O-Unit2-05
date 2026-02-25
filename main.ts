/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Illia
 * Created on: Feb 2026
 * This program: Temperature Kelvin
*/

let temperatureK: number
let temperatureC: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.B, function () {

    temperatureK = input.temperature()
    temperatureC = (temperatureK + 273.15)
    temperatureC = Math.round(temperatureC)

    basic.clearScreen()
    basic.showString('The temperature is: ' + temperatureC.toString() + 'K')
})
