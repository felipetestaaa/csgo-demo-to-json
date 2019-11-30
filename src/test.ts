
import fs = require("fs");
import demofile = require("demofile");

fs.readFile("../demos/mirage.dem", (err, buffer) => {
  const demoFile = new demofile.DemoFile();

  demoFile.on("start", () => {
    console.log("Demo header:", demoFile.header);
    console.log("Tick rate:", demoFile.tickRate);

    // Stop parsing - we're finished
    demoFile.cancel();
  });

  demoFile.parse(buffer);
});