const objuser = {id:240, name:"gowtam"};
//object to json
const convertjson = JSON.stringify(objuser);
//JSON to object
const userFromJSON=  JSON.parse(convertjson);
console.log(userFromJSON);