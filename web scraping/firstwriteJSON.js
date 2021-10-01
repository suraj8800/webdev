// node firstwriteJSON.js --dest=teams.json

let minimist = require("minimist");
let fs = require("fs");

let args = minimist(process.argv);

let teams =[
    {
        team: "India",
        rank: 1,
        matches: [
            {
                vs: "Australia",
                result: "win"
            },
            {
                vs: "England",
                result: "Win"
            }
        ]
    },
    {
        team: "Australia",
        rank:2,
        matches: [
            {
                vs: "India",
                result: "Loss"
            },
            {
                vs : "England",
                result: "Win"
            }
        ]
    },
    {
        team: "England",
        rank:3,
        matches: [
            {
                vs: "India",
                result: "loss"
            },
            {
                vs: "Australia",
                result:"loss"
            }
        ]
    }
];

let json = JSON.stringify(teams);
//stringify convert jso to json. jso can't be printed or saved. it has to be converted to json via JSON.stringify.
fs.writeFileSync(args.dest, json, "utf-8");