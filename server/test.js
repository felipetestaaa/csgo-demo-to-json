"use strict";
exports.__esModule = true;
var fs = require("fs");
var demofile = require("demofile");
fs.readFile("../demos/mirage.dem", function (_err, buffer) {
    var demoFile = new demofile.DemoFile();
    demoFile.gameEvents.on("player_death", function (e) {
        var victim = demoFile.entities.getByUserId(e.userid);
        var attacker = demoFile.entities.getByUserId(e.attacker);
        var assister = demoFile.entities.getByUserId(e.assister);
        var victimID = victim ? victim.steam64Id : null;
        var attackerID = attacker ? attacker.steam64Id : null;
        var assisterID = assister ? assister.steam64Id : null;
        console.log(victimID + ", " + attackerID + " , " + assisterID);
    });
    demoFile.parse(buffer);
});
