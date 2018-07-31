"use strict";

console.log("we are happy");
let db = require("./fetch-real");

let showItems = (legosData) => {
   console.log("data", legosData);
   let legoDisplay = document.getElementById("lego-display");

   legosData.LegoColorss.forEach((lego) => {
      let legoBlock = buildLego(lego);
      legoDisplay.innerHTML += legoBlock;
   });
};

let buildLego = (lego) => {
   //building a string to create the visual display

   //each seperated by comma
   let block = "",
      wrapper = `<section class="block-wrapper" style="border: 2px solid #000000; background-color:#${lego.ColorHex}">`,
      title = `<h3>Name: ${lego.LegoName}</h3>`,
      years = `<div class="block-years">Manufactured ${lego.YearFrom} - ${lego.YearTo}</div>`;
   // image = `<div class="card-img" style="background-image: url('images/${car.image}')"></div>`,
   let link = lego.ColorstreamLinkImage;
   if (link) {
      block += `<a href="${link}" target="_blank">${wrapper + title + years}</section></a>`;
   } else {
      block += `${wrapper + title + years}</section>`;
   }
   return block;
};

//got to get the data
//then show the data
let colorPromise = db.Legos.loadLegos()
.then((result) => {
   console.log("yeah", result);
   showItems(result);
});
console.log("colorPromise", colorPromise);






