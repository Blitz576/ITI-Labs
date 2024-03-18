module.exports = class {
  constructor(model,year) {
    this.model = model;
    this.year = year;
  }
  //print all
  toString(){ 
     return `Car model: ${this.model}, year: ${this.year}`;
  }
};
