// Old syntax for get and set -> function-based syntax

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get : function(){
            return this._email.toUpperCase()
        },
        set : function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get : function(){
            return this._password.toUpperCase()
        },
        set : function(value){
            this._password = value
        }
    })
}

const temp = new User("temp@example.com", "temporary")
console.log(temp.email);
