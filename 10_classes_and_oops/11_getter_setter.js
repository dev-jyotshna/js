class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}ghajini`
    }

    set password(value){
        this._password = value
    }
}

const camila = new User("cam@mila.com", "xyz")
console.log(camila.password)
console.log(camila.email)