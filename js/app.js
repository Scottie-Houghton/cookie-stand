'use strict';

let storesSection = document.getElementById('stores');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// got from mdn docs
function randomCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let storeLocations = [];

function Stores(name, custMin, custMax, avg){
  this.name = name;
  this.custMin = custMin;
  this.custMax = custMax;
  this.avg = avg;
  this.cust = 0;
  this.total = 0;

  storeLocations.push(this);
}

Stores.prototype.getCust = function(){
  this.cust = randomCust(this.custMin, this.custMax);
};

Stores.prototype.cookiesTotal = function(numCookies){
  return Math.round(numCookies*this.avg);
};

Stores.prototype.render = function(){
  let ulElem = document.createElement('ul');
  ulElem.textContent = this.name;
  storesSection.appendChild(ulElem);

  for(let i = 0; i < hours.length; i++){
    let liElem = document.createElement('li');
    this.getCust();
    liElem.textContent = `${hours[i]}: ${this.cookiesTotal(this.cust)} cookies`;
    this.total += this.cookiesTotal(this.cust);
    ulElem.appendChild(liElem);
  }
    
  let liElem = document.createElement('li');
  liElem.textContent = `Total: ${this.total} cookies`;
  ulElem.appendChild(liElem);
};

new Stores('Seattle', 23, 65, 6.3);

new Stores('Tokyo', 3, 24, 1.2);

new Stores('Dubai', 11, 38, 3.7);

new Stores('Paris', 20, 38, 2.3);

new Stores('Lima', 2, 16, 4.6);

function renderAllStores(){
  for(let i = 0; i < storeLocations.length; i++){
    // storeLocations[i].getCust();
    // storeLocations[i].cookiesTotal();
    storeLocations[i].render();
  }
}

renderAllStores();

// let seattle = {
//   name: 'Seattle',
//   custMin: 23,
//   custMax: 65,
//   avg: 6.3,
//   cust: 0,
//   total: 0,
//   getCust: function(){
//     this.cust = randomCust(this.custMin, this.custMax);
//   },
//   cookiesTotal: function(numCookies){
//     return Math.round(numCookies*this.avg);
//   },
//   render: function(){
//     let ulElem = document.createElement('ul');
//     ulElem.textContent = this.name;
//     storesSection.appendChild(ulElem);

//     for(let i = 0; i < hours.length; i++){
//       let liElem = document.createElement('li');
//       this.getCust();
//       liElem.textContent = `${hours[i]}: ${this.cookiesTotal(this.cust)} cookies`;
//       this.total += this.cookiesTotal(this.cust);
//       ulElem.appendChild(liElem);
//     }
    
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.total} cookies`;
//     ulElem.appendChild(liElem);
//   },
// };

// seattle.render();

// let tokyo = {
//   name: 'Tokyo',
//   custMin: 3,
//   custMax: 24,
//   avg: 1.2,
//   cust: 0,
//   total: 0,
//   getCust: function(){
//     this.cust = randomCust(this.custMin, this.custMax);
//   },
//   cookiesTotal: function(numCookies){
//     return Math.round(numCookies*this.avg);
//   },
//   render: function(){
//     let ulElem = document.createElement('ul');
//     ulElem.textContent = this.name;
//     storesSection.appendChild(ulElem);

//     for(let i = 0; i < hours.length; i++){
//       let liElem = document.createElement('li');
//       this.getCust();
//       liElem.textContent = `${hours[i]}: ${this.cookiesTotal(this.cust)} cookies`;
//       this.total += this.cookiesTotal(this.cust);
//       ulElem.appendChild(liElem);
//     }
    
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.total} cookies`;
//     ulElem.appendChild(liElem);
//   },
// };

// tokyo.render();

// let dubai = {
//   name: 'Dubai',
//   custMin: 11,
//   custMax: 38,
//   avg: 3.7,
//   cust: 0,
//   total: 0,
//   getCust: function(){
//     this.cust = randomCust(this.custMin, this.custMax);
//   },
//   cookiesTotal: function(numCookies){
//     return Math.round(numCookies*this.avg);
//   },
//   render: function(){
//     let ulElem = document.createElement('ul');
//     ulElem.textContent = this.name;
//     storesSection.appendChild(ulElem);

//     for(let i = 0; i < hours.length; i++){
//       let liElem = document.createElement('li');
//       this.getCust();
//       liElem.textContent = `${hours[i]}: ${this.cookiesTotal(this.cust)} cookies`;
//       this.total += this.cookiesTotal(this.cust);
//       ulElem.appendChild(liElem);
//     }
    
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.total} cookies`;
//     ulElem.appendChild(liElem);
//   },
// };

// dubai.render();

// let paris = {
//   name: 'Paris',
//   custMin: 20,
//   custMax: 38,
//   avg: 2.3,
//   cust: 0,
//   total: 0,
//   getCust: function(){
//     this.cust = randomCust(this.custMin, this.custMax);
//   },
//   cookiesTotal: function(numCookies){
//     return Math.round(numCookies*this.avg);
//   },
//   render: function(){
//     let ulElem = document.createElement('ul');
//     ulElem.textContent = this.name;
//     storesSection.appendChild(ulElem);

//     for(let i = 0; i < hours.length; i++){
//       let liElem = document.createElement('li');
//       this.getCust();
//       liElem.textContent = `${hours[i]}: ${this.cookiesTotal(this.cust)} cookies`;
//       this.total += this.cookiesTotal(this.cust);
//       ulElem.appendChild(liElem);
//     }
    
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.total} cookies`;
//     ulElem.appendChild(liElem);
//   },
// };

// paris.render();

// let lima = {
//   name: 'Lima',
//   custMin: 2,
//   custMax: 16,
//   avg: 4.6,
//   cust: 0,
//   total: 0,
//   getCust: function(){
//     this.cust = randomCust(this.custMin, this.custMax);
//   },
//   cookiesTotal: function(numCookies){
//     return Math.round(numCookies*this.avg);
//   },
//   render: function(){
//     let ulElem = document.createElement('ul');
//     ulElem.textContent = this.name;
//     storesSection.appendChild(ulElem);

//     for(let i = 0; i < hours.length; i++){
//       let liElem = document.createElement('li');
//       this.getCust();
//       liElem.textContent = `${hours[i]}: ${this.cookiesTotal(this.cust)} cookies`;
//       this.total += this.cookiesTotal(this.cust);
//       ulElem.appendChild(liElem);
//     }
    
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.total} cookies`;
//     ulElem.appendChild(liElem);
//   },
// };

// lima.render();
