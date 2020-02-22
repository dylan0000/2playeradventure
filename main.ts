namespace SpriteKind {
    export const Player2 = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    RIGHTFACING = false
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (readyBlast == true) {
        if (blast >= 5) {
            for (let index = 0; index < 15; index++) {
                projectile.destroy()
                mySprite.startEffect(effects.warmRadial, 500)
                BLASTPROJECTILE = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, 0, 0)
                total_shots = 0
            }
            mySprite.vy = -150
            readyBlast = false
            info.startCountdown(1)
        }
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite2) {
    if (canJump == false) {
        mySprite.vy = 0
        double_jump = true
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
})
scene.onHitWall(SpriteKind.Enemy, function (sprite) {
    if (sprite.vx > 0) {
        sprite.vx = -50
    } else if (sprite.vx < 0) {
        sprite.vx = 50
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (total_shots <= 4) {
        if (RIGHTFACING == true) {
            projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 1 . . . . . . . 
. . . . . . . 1 1 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, 120, Math.randomRange(-5, 5))
            total_shots += 1
        } else if (RIGHTFACING == false) {
            projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 1 . . . . . . . 
. . . . . . . 1 1 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, -120, Math.randomRange(-5, 5))
            total_shots += 1
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    projectile.destroy()
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (canjump2 == true) {
        if (mySprite3.vy == 0) {
            mySprite3.vy = -150
            pause(50)
            mySprite3.vy = 0
            doublejump2 = true
        }
    } else {
        if (doublejump2 == true) {
            doublejump2 = false
            pause(50)
            mySprite3.vy = -150
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    mySprite.vy = -130
    mySprite.setFlag(SpriteFlag.Ghost, true)
    pause(100)
    mySprite.setFlag(SpriteFlag.Ghost, false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    RIGHTFACING = true
})
info.onCountdownEnd(function () {
    mySprite.say("Blast ready", 500)
    readyBlast = true
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.ashes, 100)
    mySprite.setImage(img`
. . . . . . f f f f . . . . . . 
. . . . . f f f 1 f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . f . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    if (canJump == true) {
        if (mySprite.vy == 0) {
            mySprite.vy = -150
            pause(50)
            mySprite.vy = 0
            double_jump = true
        }
    } else {
        if (double_jump == true) {
            double_jump = false
            pause(50)
            mySprite.vy = -150
        }
    }
})
scene.onHitWall(SpriteKind.Player2, function (sprite2) {
    if (canjump2 == false) {
        mySprite3.vy = 0
        doublejump2 = true
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    blast += 1
})
let doublejump2 = false
let canjump2 = false
let double_jump = false
let canJump = false
let total_shots = 0
let BLASTPROJECTILE: Sprite = null
let blast = 0
let RIGHTFACING = false
let mySprite2: Sprite = null
let readyBlast = false
let projectile: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f 1 f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite3 = sprites.create(img`
. . . . . . 1 1 1 1 . . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 f 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player2)
mySprite.ay = 350
mySprite.setFlag(SpriteFlag.StayInScreen, true)
mySprite3.ay = 350
mySprite3.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(mySprite, 100, 0)
controller.player2.moveSprite(mySprite3, 100, 0)
scene.cameraFollowSprite(mySprite)
scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f b b b b f 
f b b b b b b b b b b f f f f f f b b b f f f f f f b b b b f b b b b f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f b b b b f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f b b b b f 
f b b b b b b b b b b b f b b b b b b b b b b b b b b b b b f b b b b f 
f b b b b b b b b b b b b b b b b b b f b b b b b b b b b b f b b b b f 
f b b b b b b b f b b b b b b b b b b b b b b b f b b b b b f b b b b f 
f b b b f b b b b b b b b b b b b b b b b b b b b b b b b b f b b b b f 
f b b b b b b f b b b b b b b b f b b b b f b b b b b b b b f b b b b f 
f b b b b b b f b b b b b f b b b b b b b b b b b f b b b b f b b b b f 
f b b b b b b f b b b b b b b b b b b b b b b b b b b b b b f b b b b f 
f b b b f b b f b b b b b b b b b b b b b f b b b b b b b b f b b b b f 
f b b b f b b f b b b b b b f b b b b b b b b b b b b b b b f b b b b f 
f b b b f b b f b b b f b b b b b b b b b b b b b b b b b b f b b b b f 
f b b b f b b f b b b b b b b b b b f b b b b b b b b b b b f b b b b f 
f b b b f b b f b b b b b b b b b b b b b b b b b b b b b b f b b b b f 
f b b b f b b f b b b b b b b b b b b b b b b f b b b b b b f b b b b f 
f b b b b b b b b b b b b b b f b b b b b b b b b b b b b b f b b b b f 
f b b b b b b b b b b f b b b b b b b b b b b b b b b b b b f b b b b f 
f b b b f b b f b b b b b b b b b b b f b b b b b b b b b b f b b b b f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f b b b b f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b f b b b b b b b b b b b b b b b b b b b b b f 
f b b f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
scene.setTile(15, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c 3 c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
`, true)
tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 25))
tiles.placeOnTile(mySprite3, tiles.getTileLocation(3, 25))
projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 1 . . . . . . . 
. . . . . . . 1 1 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, 100, -100)
readyBlast = true
for (let index = 0; index < 23; index++) {
    mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 7 7 7 7 7 7 7 7 7 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . c c c c c c c . . . . . 
. . . . c c c c c c c c . . . . 
. . . c c c c c c c c c . . . . 
. . . c c c c c c c c c c c . . 
. . . c c c c c c c c c c c c . 
. . c c c c c c c c c c c c c . 
. c c c c c c c c c c c c c c . 
. c c c c c c c c c c c c c c . 
`, SpriteKind.Enemy)
    mySprite2.setVelocity(50, 0)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(Math.randomRange(0, 30), 28))
}
info.setLife(3)
game.onUpdate(function () {
    if (mySprite.vy == 0) {
        mySprite.setImage(img`
. . . . . . f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f 1 f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    } else if (mySprite.vy > 0) {
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f 1 f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . f . . . . . . . 
`)
    }
})
game.onUpdateInterval(1000, function () {
    projectile.follow(mySprite, 150)
})
