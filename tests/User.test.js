const User = require('../src/User')

// User tests here
describe("test the User", () =>{
    const user1 = new User('Bob','*****',20);
    test("user object created", () =>{
        expect(user1 instanceof User).toBe(true);
    })

})

// test username
describe("test the Users username", () =>{
    const user2 = new User('Max','*****',30);
    test("test if username valid", () =>{
        expect(user2.username).toEqual('Max');
    })

})
// test password
describe("test the Users password", () =>{
    const user3 = new User('Max','*****',30);
    test("test if username valid", () =>{
        expect(user3.password).toEqual('*****');
    })

})

// test age
describe("test the Users age", () =>{
    const user3 = new User('Max','*****',30);
    test("test if age valid", () =>{
        expect(user3.age).toEqual(30);
    })

})

// test login
describe("test the Users login method", () =>{
    const user3 = new User('Max','*****',30);
    user3.login('*****')

    test("test if user is logged in", () =>{
        expect(user3.getloggedIn()).toBe(true);
    })

})

// test logout
describe("test the Users logout method", () =>{
    const user3 = new User('Max','*****',30);
    user3.logout();
    test("test if user is logged out", () =>{
        expect(user3.getloggedIn()).toBe(false);
    })

})
