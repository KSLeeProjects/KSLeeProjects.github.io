var myObj = {
    name: 'Boi',
    age: 27
};

var myData = JSON.stringify(myObj);
console.log(myData);
var returned = JSON.parse(myData);
console.log(returned);