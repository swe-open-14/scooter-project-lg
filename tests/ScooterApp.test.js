const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

const scooter1 = new Scooter ("salford");
const scooter2 = new Scooter ("mediacity");
const scooter3 = new Scooter ("salford");
let stations = {"mediacity" : [scooter2], "salford" : [scooter1,scooter3] };
let registeredUsers = {"lisa" : { username: 'Lisa', password: '*****', age: 30 },
                           "benjy" : { username: 'benjy', password: '***', age: 20 }}
const scooterApp1 = new ScooterApp(stations,registeredUsers);

// ScooterApp tests here
describe("test for scooterApp class", ()=>{
    test("test ScooterApp has properties ", ()=>{
        expect(scooterApp1).toHaveProperty(stations,registeredUsers);
    })
})

describe("test methods in scooterApp class", ()=>{
    const newUser = new User("maximus", "****", 19);
    // register user
    test("test ScooterApp method register user ", ()=>{
        
        scooterApp1.registerUser(newUser)
        expect(scooterApp1.registeredUsers.length).toBe(3);
    })
    // log in
    test("test ScooterApp method loginUser ", ()=>{
        scooterApp1.loginUser("maximus", "****")
        expect(newUser.getloggedIn()).toBe(true);
    })
    // log out
    test("test ScooterApp method logoutUser ", ()=>{
        scooterApp1.logoutUser("salford")
        expect(newUser.getloggedIn()).toBe(false);
    })
})
describe("test for scooterApp methods", ()=>{
    
    const testScooter = new Scooter ("knutsford");
    const testUser = new User("Rose", "******", 60)

    let stations = {"knutsford" : [testScooter]}
    let registeredUsers = {"Rose" : {username: "Rose", password: '******', age: 60 }}
    const testSooterApp = new ScooterApp(stations,registeredUsers);

    // rent scooter
    test("test ScooterApp rent scooter method ", ()=>{
        testSooterApp.rentScooter(testScooter,testUser)
        expect(console.log).toHaveBeenCalledWith('scooter is rented');
    })
    // dock scooter
    test("test ScooterApp dock scooter method ", ()=>{
        testSooterApp.dockScooter(testScooter,"salford")
        expect(console.log).toHaveBeenCalledWith('scooter is docked');
    })
})





