/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Evan M
 * Created on: Oct 2024
 * This program will draw a perimeter both clockwise and counter-clockwise
*/

//variables
let loopNumberX = 0
let loopNumberY = 0
let sprite: game.LedSprite = null

//setup
basic.clearScreen()
basic.pause(500)
basic.showIcon(IconNames.Happy)

//loop a
input.onButtonPressed(Button.A, function() {
    // setup
    basic.clearScreen()
    sprite = game.createSprite(0, 0)

    while (loopNumberX <= 5) {
        sprite.set(LedSpriteProperty.X, loopNumberX)
        loopNumberX = loopNumberX + 1
        basic.pause(250)
    }
    while (loopNumberY <= 5) {
        sprite.set(LedSpriteProperty.Y, loopNumberY)
        loopNumberY = loopNumberY + 1
        basic.pause(250)
    }
    while (loopNumberX >= 0) {
        sprite.set(LedSpriteProperty.X, loopNumberX)
        loopNumberX = loopNumberX - 1
        basic.pause(250)
    }
    while (loopNumberY >= 0) {
        sprite.set(LedSpriteProperty.Y, loopNumberY)
        loopNumberY = loopNumberY - 1
        basic.pause(250)
    }
})

//loop b
input.onButtonPressed(Button.B, function () {
    // setup
    basic.clearScreen()
    sprite = game.createSprite(0, 0)

    while (loopNumberX <= 5) {
        sprite.set(LedSpriteProperty.X, loopNumberX)
        loopNumberX = loopNumberX + 1
        basic.pause(250)

        while (loopNumberY <= 5) {
            sprite.set(LedSpriteProperty.Y, loopNumberY)
            loopNumberY = loopNumberY + 1
            basic.pause(250)
        }
    }
    while (loopNumberX >= 0) {
        sprite.set(LedSpriteProperty.X, loopNumberX)
        loopNumberX = loopNumberX - 1
        basic.pause(250)

        while (loopNumberY >= 0) {
            sprite.set(LedSpriteProperty.Y, loopNumberY)
            loopNumberY = loopNumberY - 1
            basic.pause(250)
        }
    }
})