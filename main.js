"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var user = new user_1.User("john");
user.name1 = 'John';
console.log(user_1.show(user));
