controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(randint(15, 145), randint(15, 105))
    mySprite2.setPosition(randint(15, 145), randint(15, 105))
    mySprite3.setPosition(randint(15, 145), randint(15, 105))
    mySprite4.setPosition(randint(15, 145), randint(15, 105))
    mySprite.setVelocity(randint(-10, 10), randint(-10, 10))
    mySprite2.setVelocity(randint(-10, 10), randint(-10, 10))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.say("excuse you!", 500)
})
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 1 1 . . . . . 
    . . . . . . 1 f 1 f 1 . . . . . 
    . . . . . . 1 1 1 1 1 . . . . . 
    . . . . . . 1 1 1 1 1 . . . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . . 1 . . 1 . . 1 . . . . 
    . . . . . 1 1 1 1 1 1 1 . . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . . 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 . . . . . 1 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 . . . . . . . . . 
    . . 5 5 5 5 5 . . . . . . . . . 
    . . 5 5 5 5 . . . . . . . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . 5 . 
    . . . . . 5 5 5 5 5 5 5 5 . 5 . 
    . . . . . 5 5 5 5 5 5 5 5 . . . 
    . . . . . 5 5 5 5 5 5 5 5 . . . 
    . . . . . 5 5 5 5 5 5 5 5 . . . 
    . . . . . 5 . . . . . . 5 . . . 
    . . . . . 5 . . . . . . 5 . . . 
    . . . . . 5 . . . . . . 5 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
mySprite4 = sprites.create(img`
    ..............eeeeeee...........
    ............ee455662e2e.........
    ..........ee45556723e2688.......
    .........e46776677232e777668....
    ........e46745554772227776778...
    .......4448744444777766777678...
    ......4522e7777776777766676668..
    .....4523227766722e666eeeee888..
    ....455232e76672322e4555dddd48..
    ...44567777554623e455ddddddddd4.
    ...e66774554477e455dddd55554dd44
    ..e46777444677e55dd55555d55dddd4
    ..e5668677666e5dd555555555555dde
    .e45544e8776e5d555554555555555de
    .e554eeee66e5d5555d55555dddd54de
    .e55ee44fee5d5d555555d5d5dddddde
    e454eeeefe45d55555555555dd4ddde.
    e5e4eefffe5d55555555d5555dddde..
    e5ee4eeff45d555555555555dddde...
    e5eeeeffe5d55d555d5555d5ddde....
    e5ffefeee5d55545555555ddd4e.....
    e5ffffffe545555555d5d4ddee......
    e54efeff45d55d55555dddde........
    e5eeeffe5dd5555545dddee.........
    e4eeefff5d5555d55ddde...........
    e4efefff5d5d55555d4e............
    .e4efffe5d555555dee.............
    .e54eeee5d545dd4e...............
    ..e554ee5dddddee................
    ...ee5544dddee..................
    .....eeeeeee....................
    ................................
    `, SpriteKind.Player)
mySprite.setPosition(randint(15, 145), randint(15, 105))
mySprite2.setPosition(randint(15, 145), randint(15, 105))
mySprite3.setPosition(randint(15, 145), randint(15, 105))
mySprite4.setPosition(randint(15, 145), randint(15, 105))
