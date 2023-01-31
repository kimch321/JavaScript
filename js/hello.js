class Userinfo3 {
    _id = ''; // protected 속성으로 선언
    #pawd = ''; // priviate 속성으로 선언
    _name = '';
    _email = '';
    constructor(id,pawd,name,email) {
        this._id = id;
        this.#pawd = pawd;
        this._name = name;
        this._email = email;
    }
}