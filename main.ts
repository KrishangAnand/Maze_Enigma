scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument4`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    question4 = game.askForString("what gas do plants take in for photosynthesis? give a space between both words")
    if (question4 == "Carbon dioxide") {
        info.changeScoreBy(1)
        game.showLongText("correct", DialogLayout.Bottom)
    } else {
        info.changeLifeBy(-1)
        game.showLongText("Wong", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd2, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    Question1 = game.askForString("What force keeps planets in orbit around the sun")
    if (Question1 == "Gravity") {
        info.changeScoreBy(1)
        game.showLongText("correct", DialogLayout.Bottom)
    } else {
        info.changeLifeBy(-1)
        game.showLongText("Wong", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd3, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    Question1 = game.askForString("In Shakespeare’s play Hamlet, what is the name of Hamlet’s mother?")
    if (Question1 == "Gertrude") {
        info.changeScoreBy(1)
        game.showLongText("correct", DialogLayout.Bottom)
    } else {
        info.changeLifeBy(-1)
        game.showLongText("Wong", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd8, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    Question1 = game.askForString("What is the chemical symbol for gold")
    if (Question1 == "au") {
        info.changeScoreBy(1)
        game.showLongText("correct", DialogLayout.Bottom)
    } else {
        info.changeLifeBy(-1)
        game.showLongText("Wong", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd5, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    Question1 = game.askForString("Which is the largest ocean on Earth (only mame)")
    if (Question1 == "Pacific") {
        info.changeScoreBy(1)
        game.showLongText("correct", DialogLayout.Bottom)
    } else {
        info.changeLifeBy(-1)
        game.showLongText("Wong", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd4, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    Question1 = game.askForString("Who wrote Harry Potter and the Sorcerer’s Stone")
    if (Question1 == "J.K. Rowling") {
        info.changeScoreBy(1)
        game.showLongText("correct", DialogLayout.Bottom)
    } else {
        info.changeLifeBy(-1)
        game.showLongText("Wong", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fan2`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    Question3 = game.askForString("1567+2576")
    if (Question3 == "4143") {
        info.changeScoreBy(1)
        game.showLongText("correct", DialogLayout.Bottom)
    } else {
        info.changeLifeBy(-1)
        game.showLongText("Wong", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fan1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    Question1 = game.askForString("12x10")
    if (Question1 == "120") {
        info.changeScoreBy(1)
        game.showLongText("correct", DialogLayout.Bottom)
    } else {
        info.changeLifeBy(-1)
        game.showLongText("Wong", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    question4 = game.askForString(" What is the longest river in the world")
    if (question4 == "Nile") {
        info.changeScoreBy(1)
        game.showLongText("correct", DialogLayout.Bottom)
    } else {
        info.changeLifeBy(-1)
        game.showLongText("Wong", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fan3`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    Quesion2 = game.askForString("What is capital of France ")
    if (Quesion2 == "PARIS") {
        info.changeScoreBy(1)
        game.showLongText("correct", DialogLayout.Bottom)
    } else {
        info.changeLifeBy(-1)
        game.showLongText("Wong", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`exit`, function (sprite, location) {
    tiles.setTilemap(tilemap`level10`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
    info.changeCountdownBy(240)
})
let Quesion2 = ""
let Question3 = ""
let Question1 = ""
let question4 = ""
let mySprite: Sprite = null
scene.setBackgroundColor(13)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`rockstar`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`stage`)
scene.cameraFollowSprite(mySprite)
info.startCountdown(120)
info.setLife(3)
