import fs = require("fs");
import demofile = require("demofile");

fs.readFile("../demos/mirage.dem", (err, buffer) => {
  const demoFile = new demofile.DemoFile();

  demoFile.stringTables.on("update", e => {
    if (e.table.name === "userinfo" && e.userData != null) {
      console.log("\nPlayer info updated:");
      console.log(e.entryIndex, e.userData);
    }
  });

  demoFile.parse(buffer);
});