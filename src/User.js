class User {
  // User code here
  #loggedIn = false;
  constructor(username,password,age){
    this.username = username;
    this.password = password;
    this.age = age;
  }
  login(password){
    if(this.password === password){
      this.#loggedIn = true;
    }
    else{
      throw new Error("incorrect password");
    }
  }
  logout(){
    this.#loggedIn = false;
  }
  getloggedIn(){
    return this.#loggedIn;
  }

}
// const user1 = new User('Bob','*****',20);
// user1.login('*****')
// console.log(user1.getloggedIn())

module.exports = User
