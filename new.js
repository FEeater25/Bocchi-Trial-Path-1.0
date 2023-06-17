// let nameakhir = "joko";
// let age = 30;
// let pendidikan = true;

// document.getElementById("k1").innerHTML = "hello " + nameakhir;

// let userName;
// document.getElementById("myButton").onclick = function(){
//     userName = document.getElementById("myText").value;
//     document.getElementById("myLabel").innerHTML = "Hello " + userName;
//     console.log(userName);
// }

// let username = window.prompt("whats Your name ?" );
// console.log(username);

// let age = window.prompt("How old are you");
// age = Number(age)
// age += 1
// console.log("Happy Bday, now you are ", age, "years old");

// let kecepatan;
// let waktu = window.prompt("masukan waktu");
// let waktu = number;
// let jarak = window.prompt("masukan jarak");
// let jarak = Number

// kecepatan = waktu * jarak ;
// console.log("kecepatannya adalah ", kecepatan);


// let pi = 3.14
// let radius;
// let circle;

// radius = window.prompt("masukan radius");
// radius = Number(radius)

// circle = 2 * pi * radius
// console.log("circlenya adalah ", circle);

// let x = 3.14;
// x = Math.floor(x);
// console.log(x);

// let x = 3
// let y = 6
// let z = 9

// maxi = Math.max(x,y,z);
// mini = Math.min(x,y,z);
// console.log(maxi);
// console.log(mini);


// document.getElementById("myButton").onclick = function(){
//     jarak = document.getElementById("myText").value;
//     waktu = document.getElementById("myText2").value;
//     nilai = jarak * waktu;

//     document.getElementById("myLabel3").innerHTML = "nilainya adalah: " + nilai
// }

// let a;
// let b;
// let c;

// a = window.prompt("masukan nilai A");
// a = Number(a);
// b = window.prompt("masukan nilai B");
// b = Number(b);

// c = Math.sqrt(Math.pow(a, 2) + (Math.pow(b, 2)));
// console.log(c);
 

// document.getElementById("button1").onclick = function(){
//     a = document.getElementById("number1").value;
//     b = document.getElementById("number2").value;
//     c = Math.sqrt(Math.pow(a, 2) + (Math.pow(b, 2)));
//     document.getElementById("Nilainya").innerHTML = "Nilainya adalah: " + c
// }
//  counter = 0;
// document.getElementById("inc").onclick = function(){
//    counter +=1;
//    document.getElementById("counter").innerHTML = counter;
// }
// document.getElementById("dec").onclick = function(){
//     counter -=1;
//     document.getElementById("counter").innerHTML = counter;
// }
// document.getElementById("resto").onclick = function(){
//     counter = 0;
//     document.getElementById("counter").innerHTML = counter;
// }



// document.getElementById("nilaiX").onclick = function(){
//     let x = Math.floor(Math.random() *6);
//     document.getElementById("labelNilai").innerHTML = "nilainya adalah: " + x
// }

// let x = Math.floor(Math.random()* 100);
// let y = Math.floor(Math.random()* 100);
// let z = Math.floor(Math.random()* 100);

// let x;
// let y;
// let z;

// document.getElementById("tombol").onclick = function(){

//     x = Math.floor(Math.random() * 6) + 1;
//     y = Math.floor(Math.random() * 6) + 1;
//     z = Math.floor(Math.random() * 6) + 1;

//     document.getElementById("nilaiX").innerHTML = "Nilai X: " + x;
//     document.getElementById("nilaiY").innerHTML = "Nilai Y: " + y;
//     document.getElementById("nilaiZ").innerHTML = "Nilai z: " + z;
// }

// let x;
// let y;
//  x = document.getElementById("nomor1").value;
//  y = document.getElementById("no2").value;


//  function myFunc(value){
//          x = document.getElementById("nomor1").value;
//          y = document.getElementById("no2").value;   
//         var c = x + y;
//         document.getElementById("nilainya").innerHTML = c;
     
//  }
// function myFunc2(){
//      x = document.getElementById("nomor1").value;
//      y = document.getElementById("no2").value;   
//      kurang = x - y;
//     document.getElementById("nilainya").innerHTML = kurang;
// }
// function myFunc3 (){


//     document.getElementById("nilainya").innerHTML = tambah
// }


// let phoneNumber = "0822-7107-5263";
// phoneNumber = phoneNumber.replaceAll("0", "1");
// console.log(phoneNumber);
// document.write(phoneNumber);

// let fullName = "carlo santana";
// firstName = fullName.slice(0, fullName.indexOf(" "));
// lastName = fullName.slice(fullName.indexOf(" "));
// console.log(lastName);
// console.log(firstName);

// let userName = "carlo";
// let letter = userName.charAt(2).toUpperCase();
// console.log(letter);

// let age = window.prompt("whats your age");
// if(age >= 18){
//     document.write("You old");
// }
// if(age <=5){
//     document.write("pedo");
// }

// else{
//     document.write("you kiddo");
// }

// document.getElementById("myButton").onclick = function(){
//     if(document.getElementById("myCheckBox").checked == true){
//         document.write("you rock");
//     }
//     else{
//         document.write("you sucks");
//     }
// }

// document.getElementById("myButton").onclick = function(){
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPal = document.getElementById("payPal");

// if(visaBtn.checked){
//     window.alert("You pay with Visa");
// }
// else if(masterCardBtn.checked){
//     window.alert("You pay with Master Card");
// }
// else if(payPal.checked){
//     window.alert("You Pay with PayPal");
// }
// else{
//     window.alert("Please Select a Payment Method");
// }
    
// }

// let grade = window.prompt("Nilai Anda")

// if(grade == "A"){
//     document.write("You did great");
// }
// else if(grade == "B"){
//     document.write("You did OK");
// }
// else if(grade == "C"){
//     document.write("You sucks");
// }

// let grade = window.prompt("Nilai Anda");

// switch(true){
//     case grade >= 90:
//     document.write("You did great")
//     break;
//     case grade >=70:
//     document.write("You did good")
//     break;
//     case grade >= 60:
//     document.write("You did ok")
//     break;
//     case grade <= 60:
//     document.write("you sucks")

// let temp = window.prompt("Input");
// if(temp > 0 || temp < 30){
//     document.write("The weather is good");
// }
// else{
//     document.write("the weather is bad")
// }

// let userName = "" ;
// while(userName == ""){
//     userName = window.prompt("whats your name");
    
// }
// document.write("Hello ", userName);


// let userName = "" ;
// while(userName == ""){
//     userName = window.prompt("input");
// }
// document.write(userName);

// for(let counter = 1; counter <= 200; counter +=1){
//     console.log(counter);

// }

// for(let i = 10; i > 0; i -= 1){
//     console.log(i)
// }
// console.log("happy new year");


// for(let i = 1; i <= 100; i += 1){
//     if(i == 80){
//         continue;
//     }
//     console.log(i);
// }

// for(let i = 1; i <= 10; i += 1){
//     for(let j = 1; j <= 10; j += 1){
//         console.log(j);
//     }
// }
// symbole = window.prompt("enter symbol");
// rows = window.prompt("enter # of rows");
// colums = window.prompt("enter # of colums");

// for(let i = 1; i <= rows; i += 1){
//     for(let i = 1; i <= colums; i +=1){
//         document.getElementById("myLabel").innerHTML += symbole;
//     }
//     document.getElementById("myLabel").innerHTML += "<br>";
// }


// let userName = "FEeater";
// let age = 30;


// function bday(){
//     console.log("happy bday to you");
//     console.log("happy bday to you ");
//     console.log("happy bday to you ", userName);
//     console.log("happy bday to you ");
//     console.log("happy ", age);
// }

// let area;
// let width;
// let height;

// width = window.prompt("Enter width");
// height = window.prompt("Enter width");
// area = getArea(width, height);

// function getArea(width, height){
//     return width * height;
// }
// console.log(area);


// let adult = checkAge(17);

// function checkAge(age){
//     return age >= 18 ? true : false;
// }
// document.write(adult);


// checkWin(false);
// function checkWin(win){
//     win ? console.log("you win") : console.log("you lose");
// }


//  let userName = "Feeater";
//  let items = 5;
//  let total = 75;

//  let nilai = 
//  `hello ${userName} <br>
//  you have ${items} items <br>
// with total of $${total}`

// document.getElementById("myLabel").innerHTML = nilai;

 
// let myNum = 123456.7891;
// // myNum = myNum.toLocaleString("en-US");
// console.log(myNum);


// let myNum = 100;
// myNum = myNum.toLocaleString(undefined, {style : "unit", unit : "celsius"})
// console.log(myNum);


// let answer = Math.floor(Math.random() * 5 + 1);
// document.getElementById("submitBtn").onclick = function(){
//     let guess = document.getElementById("enterNumber").value;
//     guess += 1
//     if(guess == answer){
//         document.getElementById("final").innerHTML = "you right"
//     }
//     else{
//         document.getElementById("final").innerHTML = "you wrong"
//     }

// }

// let answer = Math.floor(Math.random() * 10 + 1);
// document.getElementById("submitBtn").onclick = function(){
//     guess = parseInt(document.getElementById("enterNumber").value);
//     switch (guess) {
//         case answer:
//             alert("you right");
//             break;
//         case guess < answer:
//             alert("too small");
//             break;
//         case guess > answer:
//             alert("too big");
//             break;
//     }
// }

// let answer = Math.floor(Math.random() * 10 + 1);
// document.getElementById("submitBtn").onclick = function(){
//     guess = document.getElementById("enterNumber").value;
//     if(guess == answer){
//         alert("you right");
//     }
//     else if(guess < answer){
//         alert("too small");
//     }
//     else{
//         alert("too big");
//     }
      
// }

// let answer = Math.floor(Math.random() * 10 + 1);
// let gueses = 0;
// let guess;
// document.getElementById("submitBtn").onclick = function(){
//     guess = document.getElementById("enterNumber").value;
//     gueses += 1;
//     if(guess == answer){
//         alert(`you right,  but it took you ${gueses} times`);
//     }
//     else if(guess < answer){
//         alert("too small"); 
//     }
//     else{
//         alert("too big");
//     }
      
// }


// let answer = Math.floor(Math.random() * 10 + 1);
// let gueses = 0;
// let guess;

// document.getElementById("submitBtn").onclick = function(){
//     guess = document.getElementById("enterNumber").value;
//     gueses += 1;
//     if(guess == answer){
//         alert(`You right but it took you ${gueses} times to guess`);
//     }
//     else if(guess < answer){
//         alert("too small");
//     }
//     else{
//         alert("too big");
//     }
// }

// let temp;

// temp = document.getElementById("enterNumber").value;




// function toCelsius(temp){
//     return (temp - 32) * (5/9);
// }
// function toFarenheit(temp){
//     return temp * 9 / 5 + 32;
// }
// document.getElementById("enter1").onclick = function(){
//     if(celsiusBtn.checked){
//         document.getElementById("nilaiAkhir").innerHTML = toCelsius(temp);
//     }
//     else if(fahrenheitBtn.checked){
//         document.getElementById("nilaiAkhir").innerHTML = toFarenheit(temp);
//     }
// }

// document.getElementById("enter1").onclick = function(){
// let temp;
// if(document.getElementById("celsiusBtn").checked){
//     temp = document.getElementById("enterNumber").value;
//     temp = Number(temp);
//     temp = toCelsius(temp)
//     document.getElementById("nilaiAkhir").innerHTML = temp + "°C"
// }
// else if(document.getElementById("fahrenheitBtn").checked){
//     temp = document.getElementById("enterNumber").value;
//     temp = Number(temp);
//     temp = toFarenheit(temp);
//     document.getElementById("nilaiAkhir").innerHTML = temp + "°F"
// }
// else{
//     document.getElementById("nilaiAkhir").innerHTML = "please select which temp you need to convert"; 
// }


// }



// document.getElementById("enter1").onclick = function(){
//     let temp;
//     temp = document.getElementById("enterNumber").value;
//     if(celsiusBtn.checked){
//         temp = Number(temp);
//         temp = toCelsius(temp);
//         document.getElementById("nilaiAkhir").innerHTML = temp + "°C" ;
//     }
//     else if(fahrenheitBtn.checked){
//         temp = Number(temp);
//         temp = toFarenheit(temp);
//         document.getElementById("nilaiAkhir").innerHTML = temp + "°F" ;
//     }
//     else{
//         document.getElementById("nilaiAkhir").innerHTML = "select a unit";
//     }
// }

// temp = document.getElementById("enterNumber").value;
// result = celsiusBtn.checked ? toCelsius(temp) : toFarenheit(temp);
// document.getElementById("nilaiAkhir").innerHTML = result + (celsiusBtn.checked ? "°C" : "°F");

// let temp;
// temp = document.getElementById("enterNumber").value;
// document.getElementById("enter1").onclick = function(){
//     if(celsiusBtn.checked){
//         temp = document.getElementById("enterNumber").value;
//         result = toCelsius(temp);
//         document.getElementById("nilaiAkhir").innerHTML = result + "°C";
//     }
//     else if(fahrenheitBtn.checked){
//         temp = document.getElementById("enterNumber").value;
//         result = toFahrenheit(temp);
//         document.getElementById("nilaiAkhir").innerHTML = result + "°F"
//     }
//     else{
//         document.getElementById("nilaiAkhir").innerHTML = "Please Select a Unit";
//     }
// }
// function toCelsius(temp){
//     return (temp - 32) * (5/9);
// }
// function toFahrenheit(temp){
//     return temp * 9 / 5 + 32;
// }

// let temp;

// document.getElementById("enter1").onclick = function(){
//     temp = document.getElementById("enterNumber").value
//     result = celsiusBtn.checked ? toCelsius(temp) : toFahrenheit(temp);
//     document.getElementById("nilaiAkhir").innerHTML = result + (celsiusBtn.checked ? "°C" : "°F");
// }


// function toCelsius(temp){
//         return (temp - 32) * (5/9);
//     }
//     function toFahrenheit(temp){
//         return temp * 9 / 5 + 32;
//     }


// let nilai;
// let hasil;
// let guesses = 0;
// document.getElementById("tombol").onclick = function(){
//     nilai = document.getElementById("masukanNilai").value;
//     hasil = Math.floor(Math.random() * 10 + 1);
//     guesses += 1;
//     if(nilai == hasil){
//         document.getElementById("nilaiAkhir").innerHTML = `you right and it took you ${guesses} try`;
//     }
//     else if(nilai < hasil){
//         document.getElementById("nilaiAkhir").innerHTML = "too small"
//         console.log(hasil);
//     }
//     else{
//         document.getElementById("nilaiAkhir").innerHTML = "too big"
//     }
// }


// let fruits = ["apple","orange","lemon"];

// console.log(fruits.indexOf("orange"));

// let prices = [5, 10, 15,20, 25];
// for(let i = 0; i < prices.length; i += 1){
//     console.log(prices[i]);
// }

// let prices = [5, 10, 15,20, 25];
// for(let i = prices.length; i > -1; i -= 1){
//     console.log(prices[i]);
// }

// let prices = [5, 10, 15, 20, 25];
// for(let price of prices){
//     console.log(price);
// }

// for(let i = 1; i < 10; i ++){
//     console.log(i);
// }
//  let fruits = [1 ,21, 12, 40, 33, 17];
//  fruits = fruits.sort().reverse();
 
// for(fruit of fruits){
//     console.log(fruit);
// }
 

// let fruits = ["apples", "banana", "manggo"];
// let veggies = ["corn", "lettuce", "pumpkin"];
// let meat = ["eggs", "chicken", "cow"];

// fruits.push(... veggies);
// console.log(fruits);


// let groceryList = [fruits, veggies, meat];

// groceryList[0][1] = "papaya";


// for(let list of groceryList){
//    for(let detail of list){
//     console.log(detail);
//    }
// }

// let nilai1 = document.getElementById("1Btn").value;
// let nilai2= document.getElementById("2Btn").value;

// function plus(){
//    let result = nilai1 * nilai2 ;
//    window.alert(result)
   
// }

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// function sum(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total += number
//     }
//     return total;
// }
    
//   console.log(sum(a,b,c,d,e));  

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// total = 0;
// function sum(...angka){
//     for(let x of angka){
//         total = total + x
//     }
//     return total;
// }
// document.write(sum(a,b,c,d,e));

// let cars = ["avansa", "adadada", "subaru"]

// let text = ""
// for(let x of cars){
//     text += x + "<br>";
// }
// document.write(text)


// let angka = sum(3,4);

// function sum(x,y){
//     hasil = x + y;
//     return hasil;
   
// }

// displayConsole(angka)

// function displayConsole(x){
//     console.log(x);
// }

// function displayHtml(x){
//     document.getElementById("myLabel").innerHTML = x;
// }


// sum(4,5,8,displayHtml)

// function sum(a,b,c,callBack){
//     let result = a + b + c
//     callBack(result)
// }

// function displayConsole(result){
//     console.log(result);
// }

// function displayHtml(x){
//     document.getElementById("myLabel").innerHTML = x
// }


// let numbers = [1,2,3]

// numbers.forEach(nilai => console.log(nilai));


// let a = window.prompt("masukan nama");
// let b = window.prompt("masukan fam");
// let hello = a + b
// document.write(hello)

// sum(1,2 , displayRes);

// function sum(x,y, callback){
//     result = x + y;
//     callback(result);
// }

// function displayRes(lalala){
//     console.log(lalala);
// } 



/* forEach function  


const students = ["spongebob", "crab", "sandy"];
students.forEach(capitalize);


function capitalize(element,index,array){
    array[index] = element[0].toUpperCase() + element.substring(1);
    console.log(students[0]);
}

const students = ["lalalu", "carlos", "santana", "melo"];
students.forEach(toUpper);

function toUpper(satu,dua,tiga){
    tiga[dua] = satu[0].toUpperCase() + satu.substring(1);
}
console.log(students[1])

const friend = "carlos";
toUpper = friend[0].toUpperCase() + friend.substring(1);

console.log(friend);
console.log(toUpper);

*/

// const students = ["manggo", "carlos","spain","sainz"];
// students.forEach(toUpper)
// students.forEach(print)
// function toUpper(element,index,array){
//     array[index] = element[0].toUpperCase() + element.substring(1);
// }
 
// document.getElementById

// let numbers = [1, 2, 3, 4, 5];
// let number = numbers.map(square)
// number.forEach(print);

// function square(element){
//     return Math.pow(element, 2);
// }
// function print(element){
//     console.log(element)
// }


// let angka = [1, 2, 3, 4, 5];
// let pangkat3 = angka.map(pangkat);
// pangkat3.forEach(print)

// function pangkat(element){
//     return Math.pow(element, 3)
// }
// function print(element){
//     console.log(element);
// }

// let ages = [13, 15, 18, 20, 48];
// let adult = ages.filter(checkAge);
// adult.forEach(print);

// function checkAge(ages){
//     return ages >= 18;
// }

// function print(element){
//     console.log(element);
// }

// let harga = [5, 10, 15, 20, 25];
// let total = harga.reduce(checkOut);

// function checkOut(x,y){
//     return x + y
// }
// console.log(`The total is ${total}`);


// let ages = [13, 15, 21, 24, 56];
// let adult = ages.filter(checkAge)
// adult.forEach(print);

// function checkAge(ages){
//     return ages >= 18;
// }

// function print(element){
//     console.log(element);
// }

// const greeting = function(){
//     console.log("Hello Humans");
// }

// greeting()

// let count = 0;
// function countUp(){
//     count += 1;
//     document.getElementById("myLabel").innerHTML = count;
// }
// function countDown(){
//     count -= 1;
//     document.getElementById("myLabel").innerHTML = count;
// }

// let count = 0

// document.getElementById("upButton").onclick = function(){
//     count += 1
//     document.getElementById("myLabel").innerHTML = count;
// }
// document.getElementById("downButton").onclick = function(){
//     count -= 1
//     document.getElementById("myLabel").innerHTML = count;
// }

// let greeting = function(userName){
//     console.log("Hello",userName);
// }

// greeting("junx");

// let greeting = (userName) => console.log(`Hello ${userName}`);
// greeting("junx");

// const percent = function(x, y){
//     return x/y*100
// }
// console.log(`${percent(15, 100)}%`);

// const percent = (x ,y) => x/y*100;
// console.log(`${percent(75, 150)}%`)

// let grades = [15, 40, 90, 44, 75, 78, 41];
// grades = grades.sort(menurun);
// grades.forEach(print);

// function menurun(x,y){
//     return y-x;
// }

// function print(element){
//     console.log(element);
// }
// grades.sort(function(x,y){
//     return y-x
// });

// grades.forEach(function(element){
//     console.log(element)
// });

// let grades = [60, 80, 40, 30, 100, 20];

// grades.sort(function(x,y){
//     return y-x
// });

// grades.forEach(function(grades){
//     console.log(grades)
// });

// let grades = [60, 80, 40, 30, 100, 20];

// grades.sort((x,y) => y-x);
// grades.forEach((grades) => console.log(grades));

// let cards = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
// shuffle(cards);

// function shuffle(array){
//     let currentIndex = array.length ;
//     while(currentIndex != 0){
//         let randomIndex = Math.floor(Math.random() * array.length);
//         currentIndex -=1;

//         let temp = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temp;
      
//     } 
//     return array;
// }
//  console.log(cards);

//  let cards = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
//  shuffle(cards);

//  function shuffle(array){
//     let currentIndex = array.length;
//     while(currentIndex !=0){
//         randomIndex = Math.floor(Math.random() * array.length);
//         currentIndex -=1;

//         let temp = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temp;
//     }
//  }

// cards.forEach(cards => console.log(cards));

// let userName = "junx";
// let userInbox = 0;
// logIn();

// function logIn(){
//     showUserName();
//     showUserInbox();

// }
// function showUserName(){
//     console.log(`Hello ${userName}`);
// }
// function showUserInbox(){
//     console.log(`You have ${userInbox} new massages`);
// }

// const store = new Map([
//     ["jacket", 20],
//     ["t-shirt", 50],
//     ["hoddie", 97],
//     ["guns", 97]
// ]);
// store.set("missiles", 80);
// store.delete("hoddie")
// console.log(store.has("hat"));
// console.log(store.size);

// store.forEach((x,y,z) => console.log(`${x} ${y}`));
// let shoppingCart = 0;
// shoppingCart += store.get("jacket");
// shoppingCart += store.get("guns");

// console.log(shoppingCart);


// const store = new Map([
//     ["jacket", 20],
//     ["t-shirt", 50],
//     ["hoddie", 97],
//     ["guns", 97]
// ])

// store.forEach((key, value)=> console.log(`${key}, ${value}`));
// shoppingCart = 0;
// shoppingCart += store.get("jacket");
// shoppingCart += store.get("guns");

// console.log(shoppingCart);
// console.log(store.has("guns"));


// const pc = {
//     cpu : "ryzen",
//     ram : 8,
//     mb : "tomahawk",

//   onButton : function(){
//     console.log("PC has turn on");
//   },
//   offButton : function(){
//     console.log("Pc has turn off");
//   }
// }

// console.log(pc.mb)
// pc.onButton();

// const pc1 = {
//     cpu : "ryzen",
//     ram : 8,
//     mb : "tomahawk",

//     onButton : function(){
//         console.log(`this pc has turn on`);
//     },
//     offButton : function(){
//         console.log(`this pc has trun off`);
//     }
// }

// const pc2 = {
//     cpu : "intel",
//     ram : 16,
//     mb : "mohahwk",

//     onButton : function(){
//         console.log(`the ${this.cpu} pc has turn on`);
//     },
//     offButton : function(){
//         console.log(`this pc has trun off`);
//     }
// }

// pc2.onButton()

// class player{
//     score = 0;
//     pause(){
//         console.log(`this player paused the game`);
//     }
//     play(){
//         console.log(`this player continue to play`);
//     }
// }

// playerNoob = new player
// playerNoob.pause()
// playerNoob.score += 1;
// console.log(playerNoob.score);

// class students{
//     constructor(name,age,gpa){
//         this.name = name;
//         this.age = age;
//         this.gpa = gpa;
//     }
//     study(){
//         console.log(`${this.name} is lazy`);
//     }

// }

// student1 = new students("carlo",30,3,3.2);
// console.log(student1.age)
// student1.study();

// student2 = new students("patrick", 29, 3.2);
// console.log(student2.name);
// student2.study();

// const player = {
//     name : "carlos",
//     skill : 72,
//     power : 64,

//     shoot : function(){
//         console.log(`this ${this.name} have ${this.power} % to score`)
//     },
//     deff : function(){
//         console.log(`this ${this.name} have ${this.skill} power to deff `)
//     }
// };

// player.shoot();

// class players{
//     constructor(name,race,job){
//         this.name = name;
//         this.race = race;
//         this.job = job;
//     }
//     lvlUp(){
//         console.log(`${this.name} has lvl Up`);
//     }
//     bio(){
//         console.log(`${this.name} are ${this.race} for ${this.job}`)
//     }
// }

// player1 = new players("menthy","humans","guardian");

// player1.name = "pepepew";
// player1.bio();


// const pc = {
//     cpu : "ryzen",
//     ram : 8,
//     mb : "tomahawk",

//     onButton : function(){
//         console.log(`this pc has turn on`);
//     },
//     offButton : function(){
//         console.log(`this ${this.cpu} ${this.ram} ${this.mb} has turn off`);
//     }
// }
// pc.ram = 12;
// pc.offButton();

// class car{
//     static numberOfCars = 0;
//     constructor(model,age){
//         this.model = model;
//         this.age = age;
//         car.numberOfCars += 1;
//     }
//     data(){
//         console.log(`this car model is ${this.model} and already ${this.age} years old`)
//     }
// }

// const car1 = new car("honda",38);
// const car2 = new car("civic",40);
// const car3 = new car("supra", 20);
// const car4 = new car("purrari");

// console.log(car.numberOfCars);


// class rabbit{
//     alive = true;
//     name = "rabbit";
//     eat(){
//         console.log(`this ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`this ${this.name} are sleeping`);
//     }
//     run(){
//         console.log(`this ${this.name} are running`);
//     }
// }
// class fish{
//     alive = true;
//     name = "fish";
//     eat(){
//         console.log(`this ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`this ${this.name} are sleeping`);
//     }
//     swim(){
//         console.log(`this ${this.name} are swimming`);
//     }
// }
// class hawk{
//     alive = true;
//     name = "hawk";
//     eat(){
//         console.log(`this ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`this ${this.name} are sleeping`);
//     }
//     fly(){
//         console.log(`this ${this.name} are flying`);
//     }
// }


// class animals{
//     alive = true;
//     eat(){
//         console.log(`this ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`this ${this.name} are sleeping`);
//     }

// }

// class Rabbit extends animals{ 
//     name = "Rabbit";
//     run(){
//         console.log(`this ${this.name} are running`);
//     }
// }
// class Fish extends animals{
//     name = "Fish";
//     swim(){
//         console.log(`this ${this.name} are swimming`);
//     }
// }
// class Hawk extends animals{
//     name = "Hawk";
//     fly(){
//         console.log(`this ${this.name} are flying`);
//     }
// }


// rabbit = new Rabbit();
// fish = new Fish();
// hawk = new Hawk();

// console.log(rabbit.eat());
// rabbit.sleep();

// class animals{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

// }

// class Rabbit extends animals{
//     constructor(name,age,runSpeed){
//         super(name,age);
//         this.runSpeed = runSpeed;
//     }
// }
// class Fish extends animals{
//     constructor(name,age,swimSpeed){
//         super(name,age);
//         this.swimSpeed = swimSpeed;
//     }
// }
// class Hawk extends animals{
//     constructor(name,age,flySpeed){
//         super(name,age);
//         this.flySpeed = flySpeed;
//     }
// }


// const rabbit = new Rabbit("pedro", 2, 40);
// const fish = new Fish("nemo", 3, 20);
// const hawk = new Hawk("eagle", 6, 400);

// console.log(`this ${rabbit.name} have a speed of ${hawk.flySpeed} at the age of ${rabbit.age}`);



                                                      // i did this without looking yaaaay



// const card = ["J", "K", "L", "1", "2", "3", "4", "5", "7"];
// shuffle(card);

// function shuffle(array){
//     currentIndex = array.length;
//     while(currentIndex !=0){
//         randomIndex = Math.floor(Math.random() * array.length);
//         currentIndex -=1;
//     }
//     temp = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temp;
// }
// card.forEach((card) => console.log(card));

// class adventures{
//     constructor(lvl,stat,){
//         this.lvl = lvl;
//         this.stat = stat;
//     }
//     lvlUp(){
//         console.log(`${this.name} ${this.job} have lvlup to ${this.lvl}`)
// }   
// }

// class humans extends adventures{
//     constructor(name,job,lvl,stat){
//         super(lvl,stat)
//         this.name = name;
//         this.job = job;
//     }
// }

// class elv extends adventures{
//     constructor(name,job,lvl,stat){
//         super(lvl,stat)
//         this.name = name;
//         this.job = job;
//     }
// }


// player1 = new humans("carlos", "defender", "35", "good");
// player2 = new elv("elvie", "ranger", 99, "good");

// player2.lvlUp();

// class car{
//     constructor(power){
//         this._power = power;
//     }
//     get power(){
//         return `${this._power}hp`;
//     }
//     get gas(){
//        return `${this._gas}L (${this._gas / 50 * 100}%)`;
//     }
//     set gas(value){
//         if(value > 50){
//             value = 50;
//         }
//         this._gas = value;
//     }
// }

// car = new car(400);
// car.gas = 55;
// console.log(car.power);
// console.log(car.gas);

// class car{
//     constructor(model,year,color){
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
//     drive(){
//         console.log(`You drive the ${this.model} model car`);
//     }
// }

// car1 = new car("honda", 2007, "black");
// car2 = new car("Lambo", 2010, "yellow");
// car3 = new car("mustang", 2009, "white");


// function detailInfo(car){
//     console.log(car.model);
//     console.log(car.year);
//     console.log(car.color);
// }
//  function changeColor(car,color){
//     car.color = color;
//  }
// changeColor(car1, "green");
// detailInfo(car1);
// const cars = [car1, car2, car3];
// console.log(cars[0].model);

// function startRace(cars){
//     for(let car of cars){
//         car.drive();
//     }
// }


// startRace(cars);

// class card{
//     constructor(value,suit){
//         this.value = value;
//         this.suit = suit;
//     }
// }

// card1 = new card("A", "Heart");
// card2 = new card("A", "Spade");
// card3 = new card("A", "Diamond");
// card4 = new card("A", "Clubs");
// card5 = new card("2", "Heart");
// card6 = new card("2", "Spade");
// card7 = new card("2", "Diamond");
// card8 = new card("2", "Clubs");

// let cards = [card1, card2, card3, card4, card5, card6, card7, card8];

// console.log(card1.value + card2.suit);
// console.log(cards[0].value + cards[3].suit);

// cards.forEach((cards) => console.log(`${cards.value}, ${cards .suit}`));

// try{
//     console.lag()
// }
// catch(error){
//     console.log(error);
// }

                                                                // 5-13-2023

// try{
//     let x = window.prompt(`Enter a number`);
//     console.log(`${x} is a number`);
//     if(isNaN(x)) throw "This isnt a number";
//     if(x == "") throw "Enter a value"
// }
// catch(error){
//     console.log(error); 
// }
// finally{
//     console.log("this always executed");
// }


// let product = "gold";
// let price = 499.12;
// let scamA = setTimeout(scam1, 3000, product, price);
// let scamB = setTimeout(scam2, 6000);
// let scamC = setTimeout(scam3, 6000);

// function scam1(product, price){
//     alert(`Buy this ${product} for ${price}`);
// }
// function scam2(){
//     alert(`Thnx for buying this shit`);
// }
// function scam3(){
//     alert(`just fucking do it`);
// }



// document.getElementById("buyButton").onclick = function(){
//     clearTimeout(scamA);
//     clearTimeout(scamB);
//     clearTimeout(scamC);
//     alert(`THNX for Buying`);
// }

// try{
//     let x = window.prompt(`enter whatever number`);
//     x = Number(x);
//     console.log(`${x} is a number`);
//     if(isNaN(x))throw `this isnt a number`;
//     if(x == "")throw `enter a value`;

// }
// catch(error){
//     console.log(error);
// }




//                                              5.15.2023

// let count = 0;
// max = window.prompt(`count until #?`);
// max = Number(max);

// myTimer = setInterval(countUp, 1000);

// function countUp(){
//     count += 1;
//     console.log(count);
//     if(count >= max){
//         clearInterval(myTimer);
//     }
// }


// let date = new Date
// date = date.toLocaleDateString()
// let year = date.getFullYear()
// console.log(year);
// console.log(date);

// let date = new Date(2023, 1, 24, 1, 2, 3, 4);

// let date = new Date
// year = date.getFullYear();
// let dates = date.getDate();
// let months = date.getMonth();
// let day = date.getDay();
// let hour = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();



// console.log(year);
// console.log(months);
// console.log(dates);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);

// date.setFullYear(2030);
// year = date.getFullYear();
// console.log(year)

// function dateFormat(date){
//     let year = date.getFullYear();
//     let month = date.getMonth();
//     let day = date.getDate();

//     return `${day}/${month}/${year}`;
// }

// function timeFormat(date){
//     let hour = date.getHours();
//     let minute = date.getMinutes();
//     let second = date.getSeconds();
//     let amOrPm = hour > 12 ? "Pm" : "Am";
//     hour = (hour % 12) || 12;

//     return `${hour}:${minute}.${second} ${amOrPm}`;

// }
// document.getElementById("myLabel").innerHTML = dateFormat(date) + "" + timeFormat(date);

// myLabel = document.getElementById("myLabel");
// Update();
// setInterval(Update, 1000);
// function Update(){
//     let date = new Date();
//     myLabel.innerHTML = formatTime(date);

//     function formatTime(date){
//         let hour = date.getHours();
//         let minute = date.getMinutes();
//         let second = date.getSeconds();
//         let mesopotamia = hour > 12 ? "Pm" : "Am";
//         hour = (hour % 12) || 12;
//         hour = formatZero(hour);
//         minute = formatZero(minute);
//         second = formatZero(second);
//         return `${hour}:${minute}:${second}/${mesopotamia}`;
//     }
//     function formatZero(time){
//         time = time.toString();
//         return time < 2 ? "0"+time : time;
//     }
// }

// console.log(`start now`);
// setInterval(() => console.log(`loading`), 3000);
// console.log(`end`);

// // console.time(`start`);
// // window.alert(`click on me`);
// // console.timeEnd(`start`); 

// console.time(`start`);
// setTimeout(() => console.log(`hehe boy`), 3000);
// console.timeEnd(`start`);



                                    // 5/16/2023




// let promise = new Promise((accept,resolve) => {
//     let loadFile = false;
//     if(loadFile){
//         accept(`loaded succesfully`);
//     }
//     else{
//         resolve(`cant load`);
//     }
// });
// promise.then((value) => console.log(value)).catch((error) => console.log(error))

// const promise = new Promise((resolve) => {
//     setTimeout(resolve, 5000);
// });

// promise.then(() => console.log(`hehe boy`));

// const pro = new Promise((resolve) => {
//     setTimeout(resolve, 5000);
// });

// pro.then((resolve) => console.log(`hehe boy`))


                                            // 5/18/2023

// let prom = new Promise((x,y) => {
//     let loadFile = false;
//     if(loadFile){
//         x(`load success`);
//     }
//     else{
//         y(`load fail`);
//     }
// })

// prom.then((x) => console.log(x)).catch((y) => console.log(y));

// myLabel = document.getElementById("myLabel");
// setInterval(update, 1000);
// update();
// function update(){
//     let date = new Date;
//     myLabel.innerHTML = currentTime(date);

//     function currentTime(date){
//         let hour = date.getHours();
//         let minute = date.getMinutes();
//         let second = date.getSeconds();
//         mesopotamia = hour > 12 ? "Pm" : "Am";
//         hour = formatZero(hour);
//         minute = formatZero(minute);
//         second = formatZero(second);
//         hour = (hour % 12) || 12;
//         return `${hour}:${minute}:${second} ${mesopotamia}`;
        
//         function formatZero(time){
//             time = time.toString();
//             return time < 10 ? "0"+time : time;
//         }
//      }
// }


// const wait = new Promise((x,y) => {
//     let loadFIle = true;
//     if(loadFIle){
//         x(`success`);
//     }
//     else{
//         y(`failed`)
//     }
// });

// wait.then((x) => console.log(x)).catch((y) => console.log(y));

// const wait = new Promise((x) => {
//     setInterval(x, 5000);
// })
// wait.then((value) => console.log(`Thnx for waiting`))

// const wait = time => new Promise((x) => {
//     setInterval(x, time);
// })
// wait(5000).then(() => console.log(`Thnx for waiting`));

// const file = new Promise((x,y) => {
//     let loadFIle = false;
//     if(loadFIle){
//         x(`FIle loaded`);
//     }
//     else{
//         y(`failed to load`);
//     }
// })
// file.then((value) => console.log(value)).catch((error) => console.log(error));

// async function loadFile(){
//     let loadFile = false;
//     if(loadFile){
//         return `Load Success`;
//     }
//     else{
//         throw `failed to load`;
//     }
// }

// loadFile().then((value) => console.log(value)).catch((error) => console.log(error));

// function loadFile(){
//     let loadFile = false;
//     if(loadFile){
//         return Promise.resolve(`file loaded successfully`);
//     }
//     else{
//         return Promise.reject(`file loaded error xD`);
//     }
// }
// loadFile().then((value) => console.log(value)).catch((error) => console.log(error));


// async function loadFile(){
//     let loadFile = false;
//     if(loadFile){
//         return `File loaded successfully`;
//     }
//     else{
//         throw `failed to load this shit`;
//     }
// }
// async function startProcess(){
//     try{
//         let x = await loadFile();
//         console.log(x);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// startProcess();

                                            // 5/19/2023

//  async function loadFile(){
//     let loadFile = false;
//     if(loadFile){
//         return `File loaded`;
//     }
//     else{
//         throw `File missing for good xD`;
//     }
//  }                                       
 
// async function loading(){
//     try{
//         let message = await loadFile();
//         console.log(message);
//     }
     
//   catch(error){
//     console.log(error);
//   }
// }
// loading();


                                            // 5/22/2023

                                            

// import { PI,getJarijari, getArea } from "./math_utility.js";
// console.log(PI);
//  let jari2 = getJarijari(10);
//  let area = getArea(20);

//  console.log(jari2);
//  console.log(area);


//  import * as MathUtil from "./math_utility.js";
//  console.log(MathUtil.PI)
//   let jari2 = MathUtil.getJarijari(10);
//  let area = MathUtil.getArea(20);

//  console.log(jari2);
//  console.log(area);

// console.log(document)
// document.body.style.backgroundColor = "lightblue"

// let x = document.getElementById("buyButton");
// x.style.backgroundColor = "grey"
                                    

                                                    // 5/23/2023



// let fruits = document.getElementsByName("fruits");

// fruits.forEach((fruits) => {
//     if(fruits.checked){
//         console.log(fruits.value)
//     }
// })

// let veggies = document.getElementsByTagName("li");
// console.log(veggies)
// veggies[0].style.color = "pink"

// // let desserts = document.getElementsByClassName("desserts");
// // console.log(desserts[1])
// // desserts[1].style.color= "green"

// // let element = document.querySelector("#myTitle");
// // element.style.color = "blue"

// let element = document.querySelectorAll("div");
// element.forEach(element => {
//     element.style.color = "green"
// })

                                            // 5/24/2023




// let fruits = document.getElementsByName("fruits");
// fruits.forEach(fruits => {
//     if(fruits.checked){
//         console.log(fruits.value)
//     }
// })
// let veggies = document.getElementsByTagName("li")
// console.log(veggies)
// veggies[1].style.backgroundColor = "green"

// let dessert = document.getElementsByClassName("desserts")
// dessert[2].style.backgroundColor = "pink"

// let random = document.querySelectorAll("li")
// random.forEach(random => {
//     random.style.backgroundColor = "yellow"
// })


                                        // 5/25/2023

// let child = document.body.firstElementChild;
// child.style.backgroundColor = "green"

// let element = document.body
// let child = element.firstElementChild
// child.style.backgroundColor = "yellow"

// let parent = document.body.parentElement
// parent.style.backgroundColor = "blue"

// let child = document.querySelector("#veggies")
// child.style.backgroundColor = "skyblue"

// let element = document.querySelector("#veggies")
// let child = element.nextElementSibling;
// child.style.backgroundColor = "grey"

// let child = document.querySelector("#veggies")
// child = child.nextElementSibling;
// child.style.backgroundColor = "yellow"


// let child = document.querySelector("#fruit");
// child = child.lastElementChild;
// child = child.previousElementSibling
// child.style.backgroundColor = "green"

// let child = document.querySelector("#fruit")
// child = child.children[1]
// child.style.backgroundColor = "skyblue"

// let child = document.querySelector("#fruit")
// let children = Array.from(child.children);
// children.forEach(child => child.style.backgroundColor = "green")


// let child = document.querySelector("#fruit")
// let children = Array.from(child.children)
// children.forEach(child => child.style.backgroundColor = "yellow")


                                                        // 5/26/2023


// // const dataDoc = document.createElement("h1")
// // dataDoc.textContent = window.prompt("Enter")
// // document.body.append(dataDoc);                                                      


//                                                         // 5/27/2023
// const dataDoc = document.createElement("h1")
// dataDoc.textContent = "Lmao"
// document.body.append(dataDoc)

// // For The last item

// // const myList = document.querySelector("#fruits");
// // const listItem = document.createElement("li")
// // listItem.textContent = "Manggo"
// // myList.append(listItem);

// // For the first item

// // const myList = document.querySelector("#fruits");
// // const listItem = document.createElement("li")
// // listItem.textContent = "Manggo"
// // myList.prepend(listItem);

// // myList.insertBefore(listItem, myList.getElementsByTagName("li")[1])

// // const title = document.getElementById("myTitle");

// // title.style.backgroundColor = "#246"


//                                         // 5/29/2023

//  const title = document.getElementById("myTitle") 
//  title.style.backgroundColor = "black"
//  title.style.color = "skyblue"
//  title.style.fontFamily = "consolas"
//  title.style.textAlign = "center"
//  title.style.border = "2px solid"
//  title.style.display = "block"          
 
 
// function doSomething(){
//     alert("You fool haha");
// }

// document.getElementById("myButton").onclick = function(){
//     alert("You fool");
// }

// let x = document.getElementById("myButton")
// x.onclick = function(){
//     alert("hehe")
// }

// let x = document.body
// x.onload = doSomething();

// function doSomething(){
//     alert("hehehehe")
// }

// document.body.onload = function(){
//     alert("hehehehe xD")
// }
//  let element = document.getElementById("myInput")
//  element.onchange = doSomething;
//  function doSomething(){
//     alert("hehehe xD kek")
 
//  }
// document.getElementById("myDiv").onmouseover = function(){
//     document.getElementById("myDiv").style.backgroundColor = "red"
// }

//  const element = document.getElementById("myDiv")
// // element.onmouseover = doSomething;
// // element.onmouseleave = doSomethingElse;
// element.onmousedown = doSomething;
// element.onmouseup = doSomethingElse;

//  function doSomething(){
//     element.style.backgroundColor = "skyblue"}
// function doSomethingElse(){
//     element.style.backgroundColor = "lightgreen"
// }



                                            // 6/1/2023



//  let x = document.getElementById("myDiv");
//  x.onmouseover = doSomething;
//  x.onmouseleave = doSomethingElse;


//  function doSomething(){
//     x.style.backgroundColor = "green"
//  }                                           
// function doSomethingElse(){
//     x.style.backgroundColor = "grey"
// }

// let innerDiv = document.getElementById("innerDiv")
// innerDiv.addEventListener("mouseover", changeBlue)
// innerDiv.addEventListener("mouseleave", chnageGreen)

// function changeBlue(){
//     innerDiv.style.backgroundColor = "lightblue";
// }
// function chnageGreen(){
//     innerDiv.style.backgroundColor = "darkgreen"
// }



// let innerDiv = document.getElementById("innerDiv");
// let outterDiv = document.getElementById("outterDiv");

// innerDiv.addEventListener("click", changeBlue,);
// outterDiv.addEventListener("click", changeBlue, true);

// function changeBlue(){
//     alert(this.id)
//     this.style.backgroundColor = "lightblue"
// }



// const myButton = document.getElementById("myButton");
// const myImg = document.getElementById("myImg");

// myButton.addEventListener("click", () => {
//     if(myImg.style.display == "none"){
//         myImg.style.display = "block"
//     }
//     else{
//         myImg.style.display = "none "
//     }
// })

// window.addEventListener("keydown", event => console.log(event.key))

// const myDiv = document.getElementById("myDiv");
// window.addEventListener("keydown", move);
// let y = 0;
// let x = 0;
// function move(event){
//     switch(event.key){
//         case "ArrowDown":
//         y+=5;
//         myDiv.style.top = y + "px";
//         break;
    
//         case "ArrowUp":
//         y-=5;
//         myDiv.style.top = y + "px";
//         break;

//         case "ArrowLeft":
//             x-=5;
//             myDiv.style.left = x + "px";
//             break;

//             case "ArrowRight":
//                 x+=5;
//                 myDiv.style.left = x + "px";
//                 break;
// }
// }




                                        // 6/3/2023


// const myDiv = document.getElementById("myDiv");
// const myButton = document.getElementById("myButton");

// myButton.addEventListener("click", begin)
// function begin(){
//     let timer = null;
// let x = 0;
// let y = 0;
//     timer = setInterval(start, 5);

//     function start(){
//     if(x >= 200 || y >= 200){
//         clearInterval(timer)
//     }
//     else{
//         x += 1;
//         y += 1;
//         myDiv.style.top = x + "px";
//         myDiv.style.left = y + "px";
//     }
// }
// }


// const myDiv = document.getElementById("myDiv");
// const myButton = document.getElementById("myButton");
// myButton.addEventListener("click", begin);
// function begin(){
//     let timeId = setInterval(start, 5)
//     let degrees = 0;
// function start(){
//     if(degrees >= 360)
//     clearInterval(timeId)

//     else{
//         degrees += 1;
//         myDiv.style.transform = "rotateX("+degrees+"deg)"
       
//     }
// }
// }

                                    // 6/4/2023

// const myDiv = document.getElementById("myDiv") 
// const myButton = document.getElementById("myButton")
// myButton.addEventListener("click", begin)
// function begin(){
//     let time = setInterval(start, 5)
//      let degrees = 0;
//      let x = 0;
//      let y = 0

// function start(){
//    if(x >= 500 || y >= 500){
//     clearInterval(time)
//    }
//    else{
//     degrees += 2;
//     x += 1;
//     y += 1;
//     myDiv.style.transform = `rotateZ(${degrees}deg  )`
//     myDiv.style.top = x + "px";
//     myDiv.style.left = y + "px";
//    } 
   
// }
// }                                   
                                // wayyy tooo bigg

// const myDiv = document.getElementById("myDiv") 
// const myButton = document.getElementById("myButton")
// myButton.addEventListener("click", begin)
// function begin(){
//     let time = setInterval(start, 5)
//     let scaleX = 1;
//     let scaleY = 1;

//     function start(){
//         scaleX += 0.01;
//         scaleY += 0.01;
//     myDiv.style.transform = `scale(${scaleX},${scaleY})`;
//     }}

                            // the right way

// const myDiv = document.getElementById("myDiv") 
// const myButton = document.getElementById("myButton")
// myButton.addEventListener("click", begin)
// function begin(){
//     let time = setInterval(start, 5)
//     let scaleX = 1;
//     let scaleY = 1;

//     function start(){
//         if(scaleX >= 2 || scaleY >= 2)
//         clearInterval(time)
//         else{
//             scaleX += 0.01;
//             scaleY += 0.01;
//         myDiv.style.transform = `scale(${scaleX},${scaleY})`;}
        
//     }}

// const canvas = document.getElementById("myCanvas");
// const context = canvas.getContext("2d")
// context.styleStroke = "black";
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(0,0);
// context.lineTo(250,250);


                                            // 6/5/2023


                                            // fuck this shit
// let myBox = document.getElementById("myBox");
// let context = myBox.getContext("2d")
// context.strokeStyle = "black";
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(0,0);
// context.lineTo(250,250);




// console.dir(window)
// console.log(window.innerHeight)
// console.log(window.innerWidth)
// console.log(scrollX)
// console.log(scrollY)
// console.log(window.location.href)
// // window.location.href = "http://www.google.com"
// const myButton = document.querySelector("#myButton")
// // myButton.addEventListener("click", () => window.open() )
// myButton.addEventListener("click", () => window.print())

// let x = window.prompt("enter your age")
// if(x >= 30){
//     alert("Welcome")
//     }
// else{
//     alert("only 18+")
//     window.close()
// }



// console.log(navigator.cookieEnabled)
// document.cookie = "firstName=FEeater; expires=Mon, 5 June 2023 12:00:00 UTC; path=/; "
// console.log(document.cookie)

// function setCookie(name, value, liveDate){
//     const date = new Date()
//     date.setTime(date.getTime() - (liveDate * 24 * 60 * 60 * 1000));
//     let expire = "expire = " + date.toUTCString();
//     document.cookie = `${name}=${value}; ${expire}; path=/;`
// }

// // setCookie("email", "feeater@gmial.com", 365);
// deleteCookie("email")
// console.log(document.cookie)

// function deleteCookie(name){
//         setCookie(name, null, null)
// }


                                // 6/9/2023

                                // Still have no iea about this

//    function setCookie(name,value,dayToLive){
//     const date = new Date;
//     date.setTime(date.getTime() - (dayToLive * 24 * 60 * 60 * 1000));
//     let expire = "expire =" + date.toUTCString();
//     document.cookie= `${name}=${value}; ${expire}; path=/`
//    }                             

// //      function deleteCookie(name){
// //      setCookie(name, null, null)
// //    }

//    setCookie("email", "feeater@gmail.com", 365);
//    setCookie("firstName", "FE", 365);
//    setCookie("lastName", "Eater", 365);

//    console.log(document.cookie)
// //    deleteCookie("email")
// //    console.log(document.cookie)

// // function getCookie(name){
// //     const cDecoder = decodeURIComponent(document.cookie);
// // 
// //     const cArray = cDecoder.split(";")
// //     let result = null;
// //     cArray.forEach(Element => {
// //         if(Element.indexOf(name) == 5){
// //             result = Element.substring(name.length + 1)
// //         }
// //     })
// //     return result;
// // }
// // // getCookie("firstName");
// // console.log(getCookie("firstName"));



                                // 2nd try

// function setCookie(name, value, daysToLive){
//     const date = new Date;
//     date.setTime(date.getTime() - (daysToLive * 24 * 60 * 60 * 1000));
//     let expire = "expired = " + date.toUTCString();
//     document.cookie = `${name}=${value} ; ${daysToLive}`
// }

// function getCookie(name){
//     const cDecoder = decodeURIComponent(document.cookie);
//     const cArray = cDecoder.split(";");
//     console.log(cArray)
//     let result = null;
//     cArray.forEach(element => {
//         if(element.indexOf(name) !== -1){
//         result = element.substring(name.length + 1)
//         }
//     })
//     return result;
// }
// setCookie("firstName", "FE" , 365);
// setCookie("lastName", "eater", 365);

// // console.log(document.cookie)
// // console.log(getCookie("firstName"))

// const firstText = document.querySelector("#firstText");
// const secondText = document.querySelector("#secondText");
// const myBtn1 = document.querySelector("#myBtn1");
// const myBtn2 = document.querySelector("#myBtn2");

// myBtn1.addEventListener("click", () => {
//     setCookie("firstName", firstText.value, 365);
//     setCookie("lastName", secondText.value, 365);
// });

// myBtn2.addEventListener("click", () => {
//     firstText.value = setCookie("firstName");
//     secondText.value = setCookie("lastName");
// })


                            // with the help chatGPT
// setCookie("firstName", "FE" , 365);
// setCookie("lastName", "eater", 365);
// getCookie("firstName");

// function setCookie(name, value, daysToLive){
//     const date = new Date;
//     date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
//     document.cookie = `${name}=${value}; max-age=${daysToLive * 24 * 60 * 60}`
// }

// function getCookie(name){
//     const cDecoder = decodeURIComponent(document.cookie);
//     const cArray = cDecoder.split("; ");
//     console.log(cArray)
//     let result = null;
//     cArray.forEach(element => {
//         if(element.indexOf(name) == 0){
//         result = element.substring(name.length + 1)
//         }
//     })
//     return result;
// }





// console.log(getCookie("firstName"))

// const firstText = document.querySelector("#firstText");
// const secondText = document.querySelector("#secondText");
// const myBtn1 = document.querySelector("#myBtn1");
// const myBtn2 = document.querySelector("#myBtn2");

// myBtn1.addEventListener("click", () => {
//     setCookie("firstName", firstText.value, 365);
//     setCookie("lastName", secondText.value, 365);
// });

// myBtn2.addEventListener("click", () => {
//     firstText.value = setCookie("firstName");
//     secondText.value = setCookie("lastName");
// })



                        // 6/10/2023

 
                        
// const timeDisplay = document.querySelector("#timeDisplay");
// const startBtn = document.querySelector("#startBtn");
// const pauseBtn = document.querySelector("#pauseBtn");
// const resetBtn = document.querySelector("#resetBtn");

// let paused = true;
// let startTime = 0;
// let elapsedTime = 0;
// let currentTime = 0;
// let intervalId;
// let hrs = 0;
// let mins = 0;
// let secs = 0;

// startBtn.addEventListener("click", () => {
//     if(paused){
//         paused = false;
//         startTime = Date.now() - elapsedTime;
//         intervalId = setInterval(updateTime, 1000);
          
//     }

// })
// pauseBtn.addEventListener("click", () => {
//     if(!paused){
//         paused = true;
//         elapsedTime = Date.now() - startTime;
//         clearInterval(intervalId);
//     }
// })
// resetBtn.addEventListener("click", () => {
//     paused = true;
//     clearInterval(intervalId);
//      startTime = 0;
//      elapsedTime = 0;
//      currentTime = 0;
//      hrs = 0;
//      mins = 0;
//      secs = 0;
//     timeDisplay.textContent = `00:00:00`;

// })

// function updateTime(){
//     elapsedTime = Date.now() - startTime;
//     secs = Math.floor((elapsedTime / 1000) % 60);
//     mins = Math.floor((elapsedTime / (1000 * 60) ) % 60);
//     hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
//     secs = pad(secs);
//     mins = pad(mins);
//     hrs = pad(hrs);
//     timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

//     function pad(time){
//         return (("0") + time).length > 2 ? time : "0" + time;
//     }
// } 



                                // custom

// const timeDisplay = document.querySelector("#timeDisplay");
// const startBtn = document.querySelector("#startBtn");
// const pauseBtn = document.querySelector("#pauseBtn");
// const resetBtn = document.querySelector("#resetBtn");

// let paused = true;
// let startTime = 0;
// let elapsedTime = 0;
// let currentTime = 0;
// let intervalId;
// let hrs = 0;
// let mins = 0;
// let secs = 0;

// startBtn.addEventListener("click", () => {
//     if(paused){
//         paused = false;
//         startTime = Date.now() - elapsedTime;
//         intervalId = setInterval(updateTime, 1000);
//     }
// })

// pauseBtn.addEventListener("click", () => {
//     if(!paused){
//         paused = true;
//         clearInterval(intervalId);

//     }
// })

// resetBtn.addEventListener("click", ()=> {
//         paused = true;
//         hrs = 0;
//         mins = 0;
//         secs = 0;
//         startTime = 0;
//         elapsedTime = 0;
//         currentTime = 0;
//         clearInterval(intervalId)
//         timeDisplay.textContent = `00:00:00`;
//     }
// )

// function updateTime(){
//     elapsedTime = Date.now() - startTime;
//     secs = Math.floor((elapsedTime / 1000) % 60);
//     mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
//     hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
//     hrs = pad(hrs);
//     mins = pad(mins);
//     secs = pad(secs);

//     function pad(time){
//         return (("0") + time).length > 2 ? time : "0" + time;
//     }
//     timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
// }


                                    // Custom 2

// const timeDisplay = document.querySelector("#timeDisplay");
// const startBtn = document.querySelector("#startBtn");
// const pauseBtn = document.querySelector("#pauseBtn");
// const resetBtn = document.querySelector("#resetBtn");

// let paused = true;
// let startTime = 0;
// let elapsedTime = 0;
// let currentTime = 0;
// let intervalId;
// let hrs = 0;
// let mins = 0;
// let secs = 0;

// startBtn.addEventListener("click", () => {
//     if(paused){
//         paused = false;
//         startTime = Date.now() - elapsedTime;
//         intervalId = setInterval(updateTime, 1000)
//     }
// })

// pauseBtn.addEventListener("click", () => {
//     if(!paused){
//         paused = true
//         clearInterval(intervalId);
//     }
// })

// resetBtn.addEventListener("click", () => {
//     paused = true;
//     clearInterval(intervalId)
//     startTime = 0;
//     elapsedTime = 0;
//     currentTime = 0;
//     intervalId;
//     hrs = 0;
//     mins = 0;
//     secs = 0;
//     timeDisplay.textContent = `00:00:00`
// })

// function updateTime(){
//     elapsedTime = Date.now() - startTime
//     secs = Math.floor((elapsedTime / 1000) % 60);
//     mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
//     hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
//     function pad(time){
//         return (("0") + time).length > 2 ? time : "0" + time;
//     }
//     secs = pad(secs);
//     mins = pad(mins);
//     hrs = pad(hrs);
//     timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
// }



                                                    // 6/12/2023

// const timeDisplay = document.querySelector("#timeDisplay");
// const startBtn = document.querySelector("#startBtn");
// const pauseBtn = document.querySelector("#pauseBtn");
// const resetBtn = document.querySelector("#resetBtn");

// let paused = true;
// let startTime = 0;
// let elapsedTime = 0;
// let currentTime = 0;
// let intervalId;
// let hrs = 0;
// let mins = 0;
// let secs = 0;

// startBtn.addEventListener("click", () => {
//     if(paused){
//         paused = false;
//         startTime = Date.now() - elapsedTime;
//         intervalId = setInterval(updateTime, 1000);
//     }
// })
// pauseBtn.addEventListener("click", () => {
//     if(!paused){
//         paused = true;
//         clearInterval(intervalId)

//     }
// })

// resetBtn.addEventListener("click", () => {
//     paused = true;
//     clearInterval(intervalId)
//     let startTime = 0;
//     elapsedTime = 0;
//     currentTime = 0;
//     intervalId;
//     hrs = 0;
//     mins = 0;
//     secs = 0;
//     timeDisplay.textContent = `00:00:00`

// })

// function updateTime(){
//     elapsedTime = Date.now() - startTime;
//     secs = Math.floor((elapsedTime / 1000) % 60);
//     mins = Math.floor((elapsedTime / (1000 * 60 )) % 60);
//     hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
//     function pad(time){
//         return(("0") + time).length > 2 ? time : "0" + time;
//     }
//         secs = pad(secs);
//         mins = pad(mins);
//         hrs = pad(hrs);
        
//         timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
   
// }



// Rock Paper Scissors Game
// const playerText = document.querySelector("#PlayerText");
// const computerText = document.querySelector("#ComputerText");
// const resultText = document.querySelector("#ResultText");
// const gameBtn = document.querySelectorAll(".gameButton");
// let player;
// let computer;
// let result;

// gameBtn.forEach(button => button.addEventListener("click", () => {
//     player = button.textContent;
//     computerTurn();
//     playerText.textContent = `Player : ${player}`;
//     computerText.textContent = `Computer : ${computerTurn}`;
//     resultText.textContent = `Result : ${checkWinner}`;

// }))

// function computerTurn(){
//    const randomNumber = Math.floor(Math.random() * 3)+ 1;
//     switch(randomNumber){
//         case 1:
//             computer = "ROCK";
//             break;
//         case 2:
//             computer = "PAPER";
//             break
//         case 3:
//             computer = "SCISSORS"
//     }
// }
// function checkWinner(){
//     if(player == computer){
//         return "Draw";
//     }
//     else if(computer == "ROCK"){
//         return (player == "PAPER") ? "YOU WIN" : "YOU LOSE";
//     }
//     else if(computer == "PAPER"){
//         return (player == "SCISSORS") ? "YOU LOSE" : "YOU WIN";
//     }
//     else if(computer == "SCISSORS"){
//         return (player == "ROCK") ? "YOU LOSE" : "YOU WIN";
//     }
// }



// 2nd try


// const playerText = document.querySelector("#PlayerText");
// const computerText = document.querySelector("#ComputerText");
// const resultText = document.querySelector("#ResultText");
// const gameBtn = document.querySelectorAll(".gameButton");
// let player;
// let computer;
// let result;

// gameBtn.forEach(button => button.addEventListener("click", () => {
//     player = button.textContent;
//     computerTurn();
//     playerText.textContent = `Player : ${player}`;
//     computerText.textContent = `Computer: ${computer};`
//     resultText.textContent = `Result : ${checkWin()}`;
// }))

// function computerTurn(){
//     let randomNumber = Math.floor(Math.random() * 3) + 1;
//     switch(randomNumber){
//         case 1:
//             computer = "ROCK";
//             break;
//         case 2:
//             computer = "PAPER";
//             break;
//         case 3:
//             computer = "SCISSORS";
//             break;        
//     }   

  
// }

// function checkWin(){
//     if(computer == player){
//         return "DRAW";
// }
//     else if(computer == "ROCK"){
//     return (player == "PAPER")? "YOU WIN" : "LOSE";
// }
//     else if(computer == "PAPER"){
//         return (player == "SCISSORS")? "YOU WIN" : "LOSE";
//     }
//     else if(computer == "SCISSORS"){
//         return (player == "ROCK")? "YOU WIN" : "LOSE";
//     }
// } 

                                    // 6/13/2023

// const playerText = document.querySelector("#PlayerText");
// const computerText = document.querySelector("#ComputerText");
// const resultText = document.querySelector("#ResultText");
// const gameBtn = document.querySelectorAll(".gameButton");
// let player;
// let computer;
// let result;

// gameBtn.forEach(button => button.addEventListener("click", () => {
//         player = button.textContent;
//         computerTurn();
//         playerText.textContent = `Player : ${player}`;
//         computerText.textContent = `Computer : ${computer}`;
//         resultText.textContent = `Result : ${checkWin()}`
// }))

// function computerTurn(){
//    const randomNumber = Math.floor(Math.random() * 3) + 1;
//     switch(randomNumber){
//         case 1:
//         computer = "ROCK";
//         break;
//         case 2:
//         computer = "PAPER";
//         break;
//         case 3:
//         computer = "SCISSORS";
//         break;    
//     }
// }
// function checkWin(){
//     if(computer == player){
//         return "DRAW";   
//     }
//     else if(computer == "ROCK"){
//         return (player == "PAPER") ? "YOU WIN" : "LOSE";
//     }
//     else if(computer == "PAPER"){
//         return(player == "SCISSORS") ? "YOU WIN" : "LOSE";
//     }
//     else if(computer == "SCISSORS"){
//         return(player == "ROCK")  ? "YOU WIN" : "LOSE";
//     }
// }



                                    6/14/2023
// const playerText = document.querySelector("#PlayerText");
// const computerText = document.querySelector("#ComputerText");
// const resultText = document.querySelector("#ResultText");
// const gameBtn = document.querySelectorAll(".gameButton");
// let player;
// let computer;
// let result;                                   

// gameBtn.forEach(button => button.addEventListener("click", () => {
//     player = button.textContent
//     computerTurn();
//     playerText.textContent = `Player : ${player}`
//     computerText.textContent = `Computer : ${computer}`
//     resultText.textContent = `Result : ${checkhWin()}`


// }));
// function computerTurn(){
//     let randomNumber = Math.floor(Math.random() * 3) + 1;
//     switch(randomNumber){
//         case 1:
//             computer = "ROCK";
//             break;
//         case 2:
//             computer = "PAPER";
//             break;
//         case 3:
//             computer = "SCISSORS"    
//     }
// }

// function checkhWin(){
//     if(computer == player){
//         return "DRAW";
//     }
//     else if(computer == "ROCK"){
//         return (player == "PAPER") ? "YOU WIN" : "YOU LOSE";
//     }
//     else if (computer == "PAPER"){
//         return (player == "SCISSORS") ? "YOU WIN" : "YOU LOSE";
//     }
//     else if(computer == "SCISSORS"){
//         return (player == "ROCK") ? "YOU WIN" : "YOU LOSE";
//     }
// }




                                                6/15/2023
const cells = document.querySelectorAll(".cell");
const StatusGame = document.querySelector("#gameStatus");
 const restartBtn = document.querySelector("#restart");
 const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
 ];    
let options = ["", "", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let start = false;

startGame()
function startGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    StatusGame.textContent = `${currentPlayer}'s turn`;
    start = true; 
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex")
    if(options[cellIndex] !="" || !start){
        return;
    }
    cellUpdate(this, cellIndex);
    checkWinner();
    
}
function cellUpdate(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function checkWinner(){
    let roundWon = false;

    for (let i = 0; i < winCondition.length; i++){
        const conditions = winCondition[i]
        let cellA = options[conditions[0]];
        let cellB = options[conditions[1]];
        let cellC = options[conditions[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true; 
            break;
        }

    }
    if(roundWon){
        StatusGame.textContent = `${currentPlayer} WON`;
        start = false; 
    }

    else if(!options.includes("")){
            StatusGame.textContent = `DRAW`;
            start = false;
    }
        else{
            changePlayer();
        }
    
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    StatusGame.textContent = `${currentPlayer}'s turn`;
}
function restartGame(){
    options = ["", "", "", "", "", "", "", "", "", ""];
    currentPlayer = "X"
    start = false;
    StatusGame.textContent = `${currentPlayer} turn`
    cells.forEach(cell => cell.textContent = "");
    startGame();

}

