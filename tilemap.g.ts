// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "house":
            case "level1":return tiles.createTilemap(hex`1000070001010101010101010101010101010101010503030306070404030303030303010105030303030303030303030303030101050303030303030303030303030301010503030303030303030303030303010105030303030303030303030303030101010101010101020201010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . . . 2 2 . . . . . . . . 2 
2 2 . . . . . . . . . . . . . 2 
2 2 . . . . . . . . . . . . . 2 
2 2 . . . . . . . . . . . . . 2 
2 2 . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level4":
            case "level4":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "village":
            case "level2":return tiles.createTilemap(hex`200010000303030303030303030303030303030302020206060202020202020202020202030505050505050505050505050505030202020606020202020202020202020203050505050505050505050505050503020202060602020202020202020202020305050505050505050505050505050302020206060202020202020202020202030505050505050505050505050505030202020606020202020606060802020203050505050505050505050505050503020202060606060606060606020202020303030303030304040303030303030302020202060606060606060702020202020202020202020606020202020202020202020202020202020606020202020202020202020202060602020202020202020202020202020202060602020202020202020202020206060202020202020202020202020202020206060202020202020202020202020606060606060606060606060606060606060606020202020202020202020202060606060606060606060606060606060606060602020202020202020202020202020202020202020202020206060202020202020202020202020202020202020202020202020202020202020606020202020202020202020201010102020202020202020202020202020202060602020202020202020202020101010101010101010101010101010202020206060202020202020202020202`, img`
2222222222222222................
2222222222222222................
2222222222222222................
2222222222222222................
2222222222222222................
2222222222222222................
2222222..2222222................
................................
................................
................................
................................
................................
................................
................................
................................
................................
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,myTiles.tile1,myTiles.tile2,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "wood":
            case "tile1":return tile1;
            case "Carpet":
            case "tile3":return tile3;
            case "bed":
            case "tile4":return tile4;
            case "bookshelf":
            case "tile5":return tile5;
            case "CraftingTable":
            case "tile6":return tile6;
            case "Chest":
            case "tile7":return tile7;
            case "Door":
            case "tile2":return tile2;
            case "Door2":
            case "tile8":return tile8;
            case "Roof":
            case "tile9":return tile9;
            case "Pathway":
            case "tile10":return tile10;
            case "Sign":
            case "tile11":return tile11;
            case "News":
            case "tile12":return tile12;
            case "Dark":
            case "tile13":return tile13;
            case "EyeRight0":
            case "tile14":return tile14;
            case "EyeLeft":
            case "tile15":return tile15;
            case "bed2":
            case "tile16":return tile16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
