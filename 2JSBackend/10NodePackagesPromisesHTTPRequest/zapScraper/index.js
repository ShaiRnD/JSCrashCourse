'use strict';
const fetch = require('node-fetch');
const fs = require('fs');

scrapeZap();

function scrapeZap(){
    getBodyFromURL(1)
    .then(body => extractNumberOfPages(body))
    .then(num => {
        const promisesArr = [];
        console.log('number of pages is', num);
        for (let i = 1; i <= num; i++) {
            promisesArr.push(extractTVObjectsArrayFromPageNum(i));
        }
        Promise.all(promisesArr)
        .then(resultsArr => {
            const tvObjArrayAllPages = resultsArr.reduce((tvObjArrayAllPages, tvObjArrayOnePage) => {
                return tvObjArrayAllPages.concat(tvObjArrayOnePage);
            }, []);
            console.log(tvObjArrayAllPages.length);
            fs.writeFile('./results.json', JSON.stringify(tvObjArrayAllPages, null, 2), (err) => {
                err && console.log(err);
            });
        }).catch(err => {err && console.log(err);});
    }).catch(err => {err && console.log(err);});
};

function getBodyFromURL(num){
    return fetch(`https://www.zap.co.il/models.aspx?sog=e-tv&pageInfo=${num}`)
    .then(ans => ans.text());
};

function extractTVObjectsArrayFromPageNum(num){
    return getBodyFromURL(num).then(body => {
        const splitStr = `<div class="ProdInfoTitle`;
        const priceRangeSplitStr = '<div class="pricesTxt">';
        const tvHTMLTextArr = body.split(splitStr).slice(1);
        console.log('cool', num, ': got ', tvHTMLTextArr.length, ' TVs');
        const tvObjArray = tvHTMLTextArr.map(tvHTMLText => {
            let name = tvHTMLText.split('aria-label=')[1].split('"')[1];
            let priceRange = tvHTMLText.split(priceRangeSplitStr)[1].split('</div>')[0].trim();
            priceRange = !priceRange.includes('<span>') ? priceRange : priceRange.split('<span>')[1].split('</span>')[0].trim();
            return{name,priceRange};
        });
        console.log('cool', num, ': got ', tvObjArray.length, ' TVs');
        return tvObjArray;
    });
};

function extractNumberOfPages(body){
    return parseInt(body.split('<meta total-pages=')[1].split('"')[1]);
};