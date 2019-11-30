var fs = require("fs");
var demofile = require("demofile");

fs.readFile("../demos/mirage.dem", function (err, buffer) {
    
    var demoFile = new demofile.DemoFile();

    demoFile.on("start", function () {
        console.log("Tick rate:", demoFile.tickRate);
        demoFile.cancel();
        return {
            tickrate: demoFile.tickRate
        };
    });

    demoFile.parse(buffer);
});
