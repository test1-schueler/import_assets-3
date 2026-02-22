let world_tileset = assets.image`world-tileset`
tiles.setCurrentTilemap(tilemap`Level2`)
// let mytile = assets.tile.tile1
let tile3 = img`
    . . f f f f f f f f f f f f . . 
    . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 c c 7 7 7 7 f 
    f c 7 7 7 7 7 7 7 c c 7 7 7 c f 
    f c c 7 7 7 c 7 7 7 7 7 7 c c f 
    f f c c c c c c c c c c c c f f 
    f f f f f f f f f f f f f f f f 
    f e e e e e e e e e e e e e e f 
    f 4 e 4 e e e e e e e e e 4 4 f 
    f 4 e e e e e e e e e e e e 4 f 
    f 4 e e e e e e e e e e e e 4 f 
    f e e e e e e e e e e e e e e f 
    . f e e e e e e e e e e e e f . 
    . . f f f f f f f f f f f f . . 
    `
// tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`transparency16`)
tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`transparency16`)
