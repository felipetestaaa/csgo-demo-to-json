import fs = require("fs");
import demofile = require("demofile");


fs.readFile("../demos/mirage.dem", (_err, buffer) => {
  const demoFile = new demofile.DemoFile();

  demoFile.gameEvents.on("player_death", e => {
    
    //const defuserPickup = demoFile.entities.getByUserId(e.userid);
    //const bombsite = demoFile.entities.getByUserId(e.site);
    const attacker = demoFile.entities.getByUserId(e.attacker);
    

    //const defuserPickupID = defuserPickup ? defuserPickup : null;
    //const bombsiteID = bombsite ? bombsite: null;
    const attackerID = attacker ? attacker.steam64Id : null;
    const attackerName = attacker ? attacker.name : null;
    const attackerPlaceName = attacker ? attacker.placeName : null;
    const attackerWeapon = attacker ? attacker.weapon.itemName : null;

    //console.log(`${victimID}, ${attackerID} , ${assisterID}`);
    console.log(`${attackerID}, ${attackerName}, ${attackerPlaceName} , ${attackerWeapon}`);
  });

  demoFile.gameEvents.on("round_end", e => {
    console.log(
      "*** Round ended '%s' (reason: %s, time: %d seconds)",
      demoFile.gameRules.phase,
      e.reason,
      demoFile.currentTime
    );

    // We can't print the team scores here as they haven't been updated yet.
    // See round_officially_ended below.
  });

  demoFile.gameEvents.on("round_officially_ended", e => {
    const teams = demoFile.teams;

    const terrorists = teams[2];
    const cts = teams[3];

    console.log(
      "\tTerrorists: %s score %d\n\tCTs: %s score %d",
      terrorists.clanName,
      terrorists.score,
      cts.clanName,
      cts.score
    );
  });
  
  demoFile.parse(buffer);
});
