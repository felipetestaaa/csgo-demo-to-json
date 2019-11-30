"use strict";
exports.__esModule = true;
var fs = require("fs");
var demofile = require("demofile");
fs.readFile("../demos/mirage.dem", function (err, buffer) {
    var demoFile = new demofile.DemoFile();
    demoFile.stringTables.on("update", function (e) {
        if (e.table.name === "userinfo" && e.userData != null) {
            console.log("\nPlayer info updated:");
            console.log(e.entryIndex, e.userData);
        }
    });
    demoFile.parse(buffer);
});
