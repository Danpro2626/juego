let Factor_1_x = 0
let Factor_2_x = 0
let Factor_5_ = 0
let Factor_6_ = 0
let Factor_3_ = 0
let Factor_4_ = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        music.playMelody("C5 B A G F E D C ", 120)
        basic.showString("LV1")
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(131, music.beat(BeatFraction.Whole))
        Factor_1_x = randint(1, 5)
        Factor_2_x = randint(1, 5)
        basic.showNumber(Factor_1_x)
        basic.pause(1000)
        basic.showString("X")
        basic.showNumber(Factor_2_x)
        basic.pause(5000)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(2000)
        basic.showNumber(Factor_1_x * Factor_2_x)
        basic.clearScreen()
    }
    for (let index = 0; index < 5; index++) {
        music.playMelody("C D E F G A B C5 ", 120)
        basic.showString("LV2")
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(131, music.beat(BeatFraction.Whole))
        Factor_1_x = randint(5, 10)
        Factor_2_x = randint(5, 10)
        basic.showNumber(Factor_1_x)
        basic.pause(1000)
        basic.showString("X")
        basic.showNumber(Factor_2_x)
        basic.pause(5000)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(2000)
        basic.showNumber(Factor_1_x + Factor_2_x)
        basic.clearScreen()
    }
    for (let index = 0; index < 5; index++) {
        music.playMelody("E B C5 A B G A F ", 120)
        basic.showString("LV3")
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(131, music.beat(BeatFraction.Whole))
        Factor_1_x = randint(10, 15)
        Factor_2_x = randint(10, 15)
        basic.showNumber(Factor_1_x)
        basic.pause(1000)
        basic.showString("X")
        basic.showNumber(Factor_2_x)
        basic.pause(5000)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(2000)
        basic.showNumber(Factor_1_x * Factor_2_x)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 5; index++) {
        music.playMelody("C5 B A G F E D C ", 120)
        basic.showString("LV1")
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(131, music.beat(BeatFraction.Whole))
        Factor_5_ = randint(1, 9)
        Factor_6_ = randint(1, 9)
        basic.showNumber(Factor_5_)
        basic.pause(1000)
        basic.showString("-")
        basic.showNumber(Factor_6_)
        basic.pause(5000)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(2000)
        basic.showNumber(Factor_5_ - Factor_6_)
        basic.clearScreen()
    }
    for (let index = 0; index < 5; index++) {
        music.playMelody("C D E F G A B C5 ", 120)
        basic.showString("LV2")
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(131, music.beat(BeatFraction.Whole))
        Factor_5_ = randint(10, 20)
        Factor_6_ = randint(10, 20)
        basic.showNumber(Factor_5_)
        basic.pause(1000)
        basic.showString("-")
        basic.showNumber(Factor_6_)
        basic.pause(5000)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(2000)
        basic.showNumber(Factor_5_ - Factor_6_)
        basic.clearScreen()
    }
    for (let index = 0; index < 5; index++) {
        music.playMelody("E B C5 A B G A F ", 120)
        basic.showString("LV3")
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(131, music.beat(BeatFraction.Whole))
        Factor_5_ = randint(20, 30)
        Factor_6_ = randint(20, 30)
        basic.showNumber(Factor_5_)
        basic.pause(1000)
        basic.showString("-")
        basic.showNumber(Factor_6_)
        basic.pause(5000)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(2000)
        basic.showNumber(Factor_5_ - Factor_6_)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 5; index++) {
        music.playMelody("C5 B A G F E D C ", 120)
        basic.showString("LV1")
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(131, music.beat(BeatFraction.Whole))
        Factor_3_ = randint(1, 9)
        Factor_4_ = randint(1, 9)
        basic.showNumber(Factor_3_)
        basic.pause(1000)
        basic.showString("+")
        basic.showNumber(Factor_4_)
        basic.pause(5000)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(2000)
        basic.showNumber(Factor_3_ + Factor_4_)
        basic.clearScreen()
    }
    for (let index = 0; index < 5; index++) {
        music.playMelody("C D E F G A B C5 ", 120)
        basic.showString("LV2")
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(131, music.beat(BeatFraction.Whole))
        Factor_3_ = randint(10, 20)
        Factor_4_ = randint(10, 20)
        basic.showNumber(Factor_3_)
        basic.pause(1000)
        basic.showString("+")
        basic.showNumber(Factor_4_)
        basic.pause(5000)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(2000)
        basic.showNumber(Factor_3_ + Factor_4_)
        basic.clearScreen()
    }
    for (let index = 0; index < 5; index++) {
        music.playMelody("E B C5 A B G A F ", 120)
        basic.showString("LV3")
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(131, music.beat(BeatFraction.Whole))
        Factor_3_ = randint(20, 30)
        Factor_4_ = randint(20, 30)
        basic.showNumber(Factor_3_)
        basic.pause(1000)
        basic.showString("+")
        basic.showNumber(Factor_4_)
        basic.pause(5000)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(2000)
        basic.showNumber(Factor_3_ + Factor_4_)
        basic.clearScreen()
    }
})
