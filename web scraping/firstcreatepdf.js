// npm install pdf-lib
// node firstcreatepdf.js --source=teams.json --dest=worldcup

let minimist = require("minimist");
let fs = require("fs");
let path = require('path');
let pdf = require("pdf-lib");

let args = minimist(process.argv);

let teamsJSON = fs.readFileSync(args.source, 'utf-8');
let teams = JSON.parse(teamsJSON);

fs.mkdirSync(args.dest);
for(let i = 0; i < teams.length; i++){
    let teamFN = path.join(args.dest, teams[i].name);
    fs.mkdirSync(teamFN);

    for(let j=0; j<teams[i].matches.length; j++){
        let matchFileName = path.join(teamFN, teams[i].matches[j].vs+".pdf")
        CreateScoreCard(teams[i].name, teams[i].matches[j], matchFileName);
    }
}

function CreateScoreCard(teamName, match, matchFileName){
    let t1 = teamName;
    let t2 = match.vs;
    let result = t1 + " " + match.result;

    let bytesofPDFTemplate = fs.readFileSync("Template.pdf");
    let PDFdockapromise = pdf.PDFDocument.load(bytesofPDFTemplate);
    PDFdockapromise.then(function(pdfdoc){
        let page = pdfdoc.getPage(0);
        page.drawText(t1, {
            x: 320,
            y: 704,
            size: 8
        });
        page.drawText(t2, {
            x: 320,
            y: 690,
            size: 8
        });
        page.drawText(result, {
            x:320,
            y: 676,
            size: 8
        })
        let finalPDFbyteskapromise = pdfdoc.save();
        finalPDFbyteskapromise.then(function(changetobytes){
            fs.writeFileSync(matchFileName, changetobytes);
        })
    });

   /* let bytesofPDFTemplate = fs.readFileSync("Template.pdf");
    let PDFdockapromise = pdf.PDFDocument.load(bytesofPDFTemplate);
    PDFdockapromise.then(function(pdfdoc){
        let page = pdfdoc.getPage(0);
        page.drawText(t1,{
            x: 320,
            y: 704,
            size = 8
        });
        page.drawText(t2, {
            x: 320,
            y: 690,
            size = 8
        });
        page.drawText(result, {
            x: 320,
            y: 676,
            size = 8,
        });

        let finalPDFbyteskapromise = pdfdoc.save();
        finalPDFbyteskapromise.then(function(finalpdfbytes){
            fs.writeFileSync(matchFileName, finalpdfbytes)
        })

    })*/

}