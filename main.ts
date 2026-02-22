controller.A.onEvent(ControllerButtonEvent.Released, function () {
	
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    // tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`transparency16`)
    tiles.setTileAt(tiles.getTileLocation(0, 9), assets.tile`tile2`)
})
let mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 150
scene.cameraFollowSprite(mySprite)
let world_tileset = assets.image`world-tileset`
tiles.setCurrentTilemap(tilemap`Level2`)
game.onUpdate(function () {
    if (controller.A.isPressed()) {
        mySprite.ay = -100
    } else {
        mySprite.ay = 150
    }
})
