class FlyCar extends require("./car") {
  constructor(model, year, fly = 1) {
    //chainning to the parent
    super(model, year);
    this.fly = fly;
  }
  //check flyiness
  canFly() {
    if (this.fly) {
      console.log("can Fly");
    } else {
      console.log("sorry can't fly due to issue");
    }
  }
}

module.exports.FlyCar = FlyCar;
