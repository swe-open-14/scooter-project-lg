const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp  {
    // ScooterApp code here
  constructor(stations,registeredUsers){
    this.stations = stations;
    this.registeredUsers = registeredUsers;
  }
  registerUser(username, password,age){
    let user = new User(username,password,age);
    if(user.age >= 18 && !this.registeredUsers.hasOwnProperty(user.username) ){
      Object.assign(this.registeredUsers,{user});
      console.log(this.registeredUsers);
    }
    else{
      if(user.age < 18){
        throw new Error("too young to register")
      }
      else{
        throw new Error("already registered")
      }

    }

  }
  loginUser(username, password){
    //locate user and call login method
    let keys = Object.keys(this.registeredUsers)
    console.log(keys.User)
    if (this.registeredUsers.keys){
      console.log("User has been logged in")

    }
    else{
      console.log("Username or password is incorrect")
    }
    
  }
  logoutUser(station){
    // if (.....){
    //   console.log("User is logged out")

    // }
    // else{
    //   throw new Error("No such user is logged in")
    // }

  }
  createScooter(station){
    const newscooter = new Scooter(station);
    this.stations.push(newscooter);
    console.log("created new scooter");
  }
  dockScooter(scooter,station){
    if(this.stations.includes(station)){
      scooter.dock();
      this.station.station.push(scooter);
    console.log("scooter is docked");

    }
    else{
      throw new Error("no such station")
    }
    
  }
  rentScooter(scooter,user){


  }
  print(){
    console.log(this.registeredUsers);
    console.log(this.stations);

  }

}
const scooter1 = new Scooter ("salford");
const scooter2 = new Scooter ("mediacity");
const scooter3 = new Scooter ("salford");

let stations = {"mediacity" : [scooter2], "salford" : [scooter1,scooter3] };
let registeredUsers = {}

const scooterApp1 = new ScooterApp(stations,registeredUsers);

//const testUser = new User('benjy','***',20 )
scooterApp1.registerUser('benjy','***',20)
scooterApp1.loginUser('benjy','***')

module.exports = ScooterApp
