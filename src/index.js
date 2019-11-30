"use strict";
exports.__esModule = true;
var fs = require("fs");
var demofile = require("demofile");
fs.readFile("../demos/mirage.dem", function (err, buffer) {
    var demoFile = new demofile.DemoFile();
    demoFile.on("start", function () {
        console.log("Demo header:", demoFile.entities.players);
        // Stop parsing - we're finished
        demoFile.cancel();
    });
    demoFile.parse(buffer);
});
