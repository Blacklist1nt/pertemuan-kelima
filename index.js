var number1 = 18;
let number2 = 28;
const number3 = 38;
//const pi =3.14

number1 = 48; //tidak disarankan
number2 = 58;
// number3 = 48;



//print (number1)
//system.print.out(number1)
console.log(number1);
console.log(number2);
console.log(number3);

//tipe data
const number = 10;

console.log(typeof number);

let x;

console.log(typeof x);

const text = "Hello World"

console.log(typeof text);

const isLogin = true;
console.log(typeof isLogin);

let someLaterdata = null;

console.log(typeof someLaterdata);

const arr =[1, "2", 3, 4, 5];

console.log(arr[0]);

for (let i = 0; i < arr.length; i++) [
    console.log(arr[i]),
]

// arr[0]
// arr[1]
// arr[2]
// arr[3]
// arr[4]

// key: value
const user = {
    email: "admingmail.com",
    password: "12345678",
};

console.log(user.email);
console.log(user.password);

const aString ="10"
const aNumber = 10;

console.log(aString == aNumber);
console.log(aString != aNumber);

console.log(number2 > number3);
console.log(number2 >= number3);
console.log(number2 < number3);
console.log(number2 <= number3);

console.log(aString === aNumber);
console.log(aString !== aNumber);

console.log(number2 > number3 && number2 >= number3); //true
console.log(number2 > number3 || number2 < number3); //true
console.log(isLogin); //not is login -> false

//perulangan
//parameter 1 -> mulai -> 0
//parameter 2 -> berakhir -> kurang dari 5
//parameter 3 -> increment (j++) -> setipa perulangan j ditambah 1
for (let j = 0; j < 5; j++){
    console.log(j);
}

//perulangan
//parameter 1 -> mulai -> 5
//parameter 2 -> berakhir -> kurang dari 0
//parameter 3 -> increment (j++) -> setiap perulangan j dikurangi 1
for (let j = 5; j > 5; j--){
    console.log(j);
}

const languange = "Deutsch";

if (languange === "English"){
    console.log("Good Morning");
}

if (languange === "English"){
    console.log("Good Morning");
} else {
    console.log("Selamat Pagi");
}
if (languange === "English"){
    console.log("Good Morning");
} else if (languange === "Deutsch") {
    console.log("Guten Morgen");
} else {
    console.log("Selamat Pagi");
}



