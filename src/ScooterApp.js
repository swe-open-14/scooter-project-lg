const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp  {
    // ScooterApp code here
  constructor(stations,registeredUsers){
    this.stations = stations;
    this.registeredUsers = registeredUsers;
  }
  registerUser(username, password,age){
    if(User.age >= 18 && !this.registeredUsers.hasOwnProperty(User.username) ){
      this.registeredUsers.push(user)
    }
    else{
      if(User.age < 18){
        throw new Error("too young to register")
      }
      else{
        throw new Error("already registered")
      }

    }

  }
  loginUser(username, password){
    //locate user and call login method
    // if (.....){
    //   console.log("User has been logged in")

    // }
    // else{
    //   console.log("Username or password is incorrect")
    // }
    
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
let registeredUsers = {"lisa" : { username: 'Lisa', password: '*****', age: 30 },
                           "benjy" : { username: 'benjy', password: '***', age: 20 }}
const scooterApp1 = new ScooterApp(stations,registeredUsers);
console.log(scooterApp1.stations)

module.exports = ScooterApp
