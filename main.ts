/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Matheus
 * Created on: Oct 2025
 * This program Turn on a neopixel green or red
*/

// variables
let sonarDistance : number = 0
let neopixelStrip: neopixel.Strip = null

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    // Finds the distance
    sonarDistance = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    if (sonarDistance < 10) {
        // Turn neopixel red
        neopixelStrip = neopixel.create(DigitalPin.P16, 1, NeoPixelMode.RGB)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.show()
        basic.pause(3000)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
    } else {
        // Turn neopixel green
        neopixelStrip = neopixel.create(DigitalPin.P16, 1, NeoPixelMode.RGB)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.show()
        basic.pause(3000)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
    }

})
basic.clearScreen()
basic.showIcon(IconNames.Happy)
