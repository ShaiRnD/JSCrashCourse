const HTMLParser = require('node-html-parser')
const fs = require('fs');
const fetch = require('node-fetch');

const ZAP_URL = 'https://www.zap.co.il/models.aspx?sog=e-tv'

const pagePromises = []

main()

async function main() {

    // getNumOfPages()
    // .then(numOfPages => {                
    //     getPages(numOfPages)
    // })

    const numOfPages = await getNumOfPages()    
    getPages(numOfPages)    
}



function getNumOfPages() {
    return fetch(ZAP_URL).then(response => response.text())
            .then(body => {
                const root = HTMLParser.parse(body);
                const searchResults = root.querySelectorAll(".SearchResultsMain meta")[0].rawAttrs
                return +searchResults.replace('\"',"").match(/\d+/)[0]
            })
}

function getPages(numOfPages) {
    for (let i=0; i<numOfPages; i++){
        pagePromises.push(fetch(ZAP_URL + '&pageinfo='+i).then(response => response.text()))
    }                

    Promise.all(pagePromises)
        .then(bodies => {
            let products = []

            for (const body of bodies) {
                products = products.concat(getProductsFromPage(body))
            }
            saveToFile(products)
        })
}

function getProductsFromPage(body){
    const root = HTMLParser.parse(body);
    const products = root.querySelectorAll(".ProductBox")

    return products.map(item => ({
        name : item.querySelectorAll(".ProdInfoTitle")[0].text.replace(/\n/g, '').replace(/\r/g, ''),
        priceRange : item.querySelectorAll(".pricesTxt")[0].text.replace(/\n/g, '').replace(/\r/g, '')
    }))    
}

function saveToFile(arrOfJsons){
    fs.writeFile(__dirname + `/results.json`, JSON.stringify(arrOfJsons, null, 2), (err) =>{
      if (err) {
          console.log(err);
      }
    })
  }