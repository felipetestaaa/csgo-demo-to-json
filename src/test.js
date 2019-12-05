"use strict";
exports.__esModule = true;
var fs = require("fs");
var demofile = require("demofile");
fs.readFile("../demos/mirage.dem", function (_err, buffer) {
    var demoFile = new demofile.DemoFile();
    demoFile.gameEvents.on("player_death", function (e) {
        //const defuserPickup = demoFile.entities.getByUserId(e.userid);
        //const bombsite = demoFile.entities.getByUserId(e.site);
        var attacker = demoFile.entities.getByUserId(e.attacker);
        //const defuserPickupID = defuserPickup ? defuserPickup : null;
        //const bombsiteID = bombsite ? bombsite: null;
        var attackerID = attacker ? attacker.steam64Id : null;
        var attackerName = attacker ? attacker.name : null;
        var attackerPlaceName = attacker ? attacker.placeName : null;
        var attackerWeapon = attacker ? attacker.weapon.itemName : null;
        //console.log(`${victimID}, ${attackerID} , ${assisterID}`);
        console.log(attackerID + ", " + attackerName + ", " + attackerPlaceName + " , " + attackerWeapon);
    });
    demoFile.gameEvents.on("round_end", function (e) {
        console.log("*** Round ended '%s' (reason: %s, time: %d seconds)", demoFile.gameRules.phase, e.reason, demoFile.currentTime);
        // We can't print the team scores here as they haven't been updated yet.
        // See round_officially_ended below.
    });
    demoFile.gameEvents.on("round_officially_ended", function (e) {
        var teams = demoFile.teams;
        var terrorists = teams[2];
        var cts = teams[3];
        console.log("\tTerrorists: %s score %d\n\tCTs: %s score %d", terrorists.clanName, terrorists.score, cts.clanName, cts.score);
    });
    demoFile.parse(buffer);
});
