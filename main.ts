namespace SpriteKind {
    export const Logo = SpriteKind.create()
    export const Button = SpriteKind.create()
    export const SelectBorder = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`village`)
})
function createGame () {
    scene.setBackgroundImage(assets.image`MainGame`)
    tiles.setCurrentTilemap(tilemap`house`)
    mySprite4 = sprites.create(assets.image`Player`, SpriteKind.Player)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(8, 2))
    mySprite.destroy()
    mySprite2.destroy()
    mySprite3.destroy()
    scene.cameraFollowSprite(mySprite4)
    controller.moveSprite(mySprite4)
    statusbar = statusbars.create(16, 2, StatusBarKind.Energy)
    statusbar.value = 500
    statusbar.attachToSprite(mySprite4)
    statusbar.setColor(2, 2)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`News`, function (sprite, location) {
    game.setDialogFrame(assets.image`Dirt`)
    game.setDialogCursor(assets.image`TVNews`)
    game.showLongText("Breaking News The Ender Dragon stole the infinite crystal", DialogLayout.Bottom)
    info.startCountdown(10)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite3.x == mySprite2.x) {
        if (mySprite3.y == mySprite2.y) {
            createGame()
        }
    }
})
info.onCountdownEnd(function () {
    tileUtil.coverAllTiles(assets.tile`wood`, assets.tile`Dark`)
    tileUtil.coverAllTiles(assets.tile`bed`, assets.tile`EyeLeft`)
    tileUtil.coverAllTiles(assets.tile`bed2`, assets.tile`EyeRight0`)
    tileUtil.coverAllTiles(assets.tile`Carpet`, assets.tile`Dark`)
    tileUtil.coverAllTiles(assets.tile`Pathway`, assets.tile`Dark`)
    tileUtil.coverAllTiles(assets.tile`Roof`, assets.tile`Dark`)
})
function setMenu () {
    scene.setBackgroundImage(assets.image`Menu`)
    mySprite = sprites.create(assets.image`Logo`, SpriteKind.Logo)
    mySprite.setPosition(64, 16)
    mySprite2 = sprites.create(assets.image`PlayButton`, SpriteKind.Button)
    mySprite2.setPosition(112, 48)
    mySprite3 = sprites.create(assets.image`SelectBorder`, SpriteKind.SelectBorder)
    mySprite3.setPosition(mySprite2.x, mySprite2.y)
}
let statusbar: StatusBarSprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let mySprite4: Sprite = null
setMenu()
