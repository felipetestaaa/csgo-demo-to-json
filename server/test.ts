import fs = require("fs");
import demofile = require("demofile");


fs.readFile("../demos/mirage.dem", (_err, buffer) => {
  const demoFile = new demofile.DemoFile();

  demoFile.gameEvents.on("player_death", e => {
    
    const victim = demoFile.entities.getByUserId(e.userid);
    const attacker = demoFile.entities.getByUserId(e.attacker);
    const assister = demoFile.entities.getByUserId(e.assister);
    

    const victimID = victim ? victim.steam64Id : null;
    const attackerID = attacker ? attacker.steam64Id : null;
    const assisterID = assister ? assister.steam64Id : null;

    console.log(`${victimID}, ${attackerID} , ${assisterID}`);
  });
  
  demoFile.parse(buffer);
});
