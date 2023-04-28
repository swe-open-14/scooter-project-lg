const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('test Scooter class', () => {
  const scooter1 = new Scooter("mediacity");

  test('test if scooter class creates Object', () => {
    expect(scooter1 instanceof Scooter).toEqual(true);
  })
})

//Property tests
describe('scooter properties', () => {
  // property tests here!
  const scooter2 = new Scooter("salford");

  test('test if scooter has correct properties', () => {
    expect(scooter2).toHaveProperty("station");
  })
})

//Method tests
describe('scooter Methods', () =>{
  const scooterTest = new Scooter("altrincham");
  const testUser = new User("Benjy","***", 25);
  //rent method
  test("check rent method",() =>{
    scooterTest.rent(testUser)
    expect(scooterTest.getUser()).toEqual(testUser);
  })

  //dock method
  test("check dock method",() =>{
    scooterTest.dock('picadilly')
    expect(scooterTest.getUser()).toEqual(null);
  })

  //requestRepair method
  // test("check requestRepair method",() =>{
  //   scooterTest.rent(testUser)
  //   expect(scooterTest.getUser()).toEqual(testUser);
  // })


  //charge method
  // test("charge", async () => {
  //   const newScooter = new Scooter();
  //   await scooter.charge(); // we need to wait for the charge!
  //   expect(newScooter.charge).toBe(100);
  // });

})
