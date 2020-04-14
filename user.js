"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name1) {
        this.name1 = name1;
    }
    return User;
}());
exports.User = User;
function show(User) {
    console.log("The name is " + User.name1);
}
exports.show = show;
