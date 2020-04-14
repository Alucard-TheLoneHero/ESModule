import {User, show} from './user';   

const user = new User( "john" );

user.name1 = 'John';

console.log( show( user ) );
