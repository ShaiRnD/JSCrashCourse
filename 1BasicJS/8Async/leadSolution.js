'use strict';
const fs = require('fs');

const LEADS_DIR = './leadFiles';

leadsReader();

function leadsReader() {
    fs.readdir(LEADS_DIR, (err, files) => {
        if (err) console.log(err);

        const txtFiles = files.filter(file => file.endsWith('.txt'));
        const usersObj = {};
        let numOfLeads = 0;
        txtFiles.forEach((file, i) => {
            fs.readFile(`${LEADS_DIR}/${file}`, 'utf-8', (err, contents) => {
                if (err) console.log(err);

                numOfLeads += buildUserObj(contents, usersObj);
                if (txtFiles.length - 1 === i) { // horrible way to check that we are done reading the files but... haven't learnt promises yet
                    writeResultsToJson(numOfLeads, usersObj);
                }
            });
        });
    });
};

function buildUserObj(contents, usersObj) {
    let numOfLeads = 0;
    contents.split('\r\n').forEach(line => {
        numOfLeads++;
        const lineFields = line.split(',');
        const userObj = {
            facebookID: lineFields[0],
            fullname: lineFields[1].slice(1, -1),
            email: lineFields[2]
        };
        usersObj[userObj.facebookID] = userObj;
    });
    return numOfLeads;
}

function writeResultsToJson(numOfLeads, results) {
    const leadObjectsArr = Object.values(results);
    console.log(`Number of original leads: ${numOfLeads}`);
    console.log(`Number of leads after duplicate deletion: ${leadObjectsArr.length}`);
    fs.writeFile('./results.json', JSON.stringify(leadObjectsArr, null, 2), (err) => {
        if (err) console.log(err);
    });
};
