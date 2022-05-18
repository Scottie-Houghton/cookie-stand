'use strict';

let storesSection = document.getElementById('stores');

let tableElem = document.createElement('table');
storesSection.appendChild(tableElem);

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
  this.cust = [];
  this.total = 0;
  this.cookieArr = [];

  storeLocations.push(this);
}

Stores.prototype.getCust = function(){
  for(let i = 0; i < hours.length; i++){
    let custNum = randomCust(this.custMin, this.custMax);
    this.cust.push(custNum);
  }
};

Stores.prototype.cookiesTotal = function(){
  this.getCust();
  for(let i = 0; i < hours.length; i++){
    let cookieNumber = Math.round(this.cust[i]*this.avg);
    this.total += cookieNumber;
    this.cookieArr.push(cookieNumber);
  }
};

Stores.prototype.render = function(){
  this.cookiesTotal();
  let trElem = document.createElement('tr');
  tableElem.appendChild(trElem);

  let thElem = document.createElement('th');
  thElem.textContent = this.name;
  trElem.appendChild(thElem);

  for(let i = 0; i < hours.length; i++){
    let tdElem = document.createElement('td');
    tdElem.textContent = this.cookieArr[i];
    trElem.appendChild(tdElem);
  }
    
  let tdElem = document.createElement('td');
  tdElem.textContent = this.total;
  trElem.appendChild(tdElem);
};

function headerRow (){
  let trElem = document.createElement('tr');
  tableElem.appendChild(trElem);

  let thElem = document.createElement('th');
  trElem.appendChild(thElem);

  for(let i = 0; i < hours.length; i++){
    let th2Elem =document.createElement('th');
    th2Elem.textContent = hours[i];
    trElem.appendChild(th2Elem);
  }

  let th3Elem = document.createElement('th');
  th3Elem.textContent = 'Total';
  trElem.appendChild(th3Elem);
}

new Stores('Seattle', 23, 65, 6.3);

new Stores('Tokyo', 3, 24, 1.2);

new Stores('Dubai', 11, 38, 3.7);

new Stores('Paris', 20, 38, 2.3);

new Stores('Lima', 2, 16, 4.6);

function renderAllStores(){
  for(let i = 0; i < storeLocations.length; i++){
    storeLocations[i].render();
  }
}

headerRow();
renderAllStores();
