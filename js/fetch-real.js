"use strict";

let Legos = {};

let legoItems = [];

let parseData = (data) => {
   data.LegoColorss.forEach((element) => {
      legoItems.push(element);
   });
   return legoItems;
};

Legos.loadLegos = () => {
   return fetch("./lego-colors.json")
   .then(res => res.json())
   .then((result) => {
         return result;
      },
      (error) => {
         return error;
      });
   };

module.exports = { Legos };