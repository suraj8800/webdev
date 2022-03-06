function helpfn(){
    console.log(`
    List of All commands:
                    node main.js tree "dirPath"
                    node main.js organize "dirPath"
                    node main.js help 
    `);
}

module.exports={
    helpkey: helpfn
}