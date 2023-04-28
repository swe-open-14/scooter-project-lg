const User = require('../src/User')

class Scooter{
  // scooter code here
  //has only one parameter station,other should be intialised by constructor.
  #user;
  #serial = 1;// QR code generated when creating scooter
  #nextSerial; 
  #charge = 100;
  #isBroken = false
  constructor(station){
    this.station = station;
  }
  rent(user){ // also need to check if user is registered or valid
    if (this.#charge > 20 || this.#isBroken === false){
      this.setUser(user);
      //console.log(this.#user)

      return `scooter for rent`;
    }
    else{
      if(this.#charge < 20){
        throw new Error("Scooter needs to charge")
      }
      else{
        throw new Error("Scooter needs repair")
      }
      
    }
  }
  setUser(user){
    this.#user = user;
  }
  getUser(){
    return this.#user;
  }

  dock(station){
    this.station = station;
    this.#user = null;

  }
  setNextSerial(){
    this.#nextSerial = this.#serial + 1;
  }

  recharge(){
    // async charge() {
    // console.log('Starting charge');
    
    // await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
    // this.charge = 100

    // console.log('Charge complete');   
    // }

  }
  
  requestRepair(){ //repairs the scooter 
    
  }
}
// const scooter1 = new Scooter("piccadilly");
// //console.log(scooter1)
// const user1 = new User("Lisa","***",30);
// scooter1.rent(user1);
// console.log(scooter1.getUser())


module.exports = Scooter
