// const forEach = require('../lib/es-functional').forEach;
// const forEachObject = require('../lib/es-functional').forEachObject;
// const unless = require('../lib/es-functional').unless;
// const times =require('../lib/es-functional').times;
// const every = require('../lib/es-functional').every;
// const some = require('../lib/es-functional').some;
// const sortBy = require('../lib/es-functional').sortBy;
// const tap = require('../lib/es-functional').tap;
// const unary = require('../lib/es-functional').unary;
// const once = require('../lib/es-functional').once;
// const factorial = require('../lib/es-functional').factorial;
// const fastFactorial = require('../lib/es-functional').fastFactorial;
// const objectAssign = require('../lib/es-functional').objectAssign;
// const objectModify = require('../lib/es-functional').objectModify;
// const map = require('../lib/projection').map;
const arrayUtils = require('../lib/projection').arrayUtils;
const map = arrayUtils.map;
const filter = arrayUtils.filter;
const concatAll = arrayUtils.concatAll;
const reduce = arrayUtils.reduce;
// times(100, (numbers)=>{
//  unless((numbers%2),()=>{
//      console.log(`\tGEEKY PAULLASTER`);
//  });
// });

// let arr = [1,2,3,4,5,6,7,8,9,10,12,11,13,14,15,16,17,19,18,20,21,22,23,24,25,26,27,28,29,30];
// forEach(arr, (data)=>{
//     if((data%2)===0){
//         console.log(data)
//         return;
//     }
//    else {
//        unless((!data%2),()=>{
//            console.log(` none divisibles ${data}`);
//        });
//    }
    
// });

// let object = {'First name':`Paullaster`, 'Last name':`Okoth`,'Gender':`Male`, 'Age': 22, 'Profession':`Software Engineer`, 'Country':`Kenya`, 'County':`Nairobi`}
// forEachObject(object,(keys,values)=>{
//     console.log(`This are the details of CEO, CTO of M.A.T.A. ${keys} : ${values}`);
// });

// let arg = [NaN,NaN,1,0,0];

// console.log(every(arg, isNaN));
// console.log(some(arg, isNaN));

// let sortArr = ['grapes', "pineapple", 'apple', 'avoccado','oranges','banana', 'quavas'];
// console.log(sortArr.sort());

// let people = [
//     {firstname:"Paullaster", lastname:"Okoth"},
//     {firstname:"Edward", lastname: "Odhiambo"},
//     {firstname: "Wisconsin", lastname:"Ontario"},
//     {firstname: "Arthur", lastname:"Oduor"},
//     {firstname: "Brian", lastname: "Otieno" }
// ];

// console.log(people.sort(sortBy("lastname")));

// function outter(key){
//     function inner(){
//         key = 'value';
//         let num =5;

//         console.log(`${key}, ${num}`);
//     }
//     inner();
// }
// console.log(outter());

// forEach([1,2,3], (a) =>
// tap(a)(() =>
// {
// console.log(a)
// }
// )
// );
    
// const arrStringNum = ['1','2','3','4','5','6','7','8','9'];
// console.log(arrStringNum.map(unary(parseInt)));

// let doPayment = once(()=>{
//     console.log('Payment done! Thank you and welcome back');
// });

// (doPayment());
// console.log(doPayment());
// console.log(factorial(3));
// fastFactorial(20);

// var a ={name:"Paullaster"};
// var b = {age: 23};
// var c = {Gender: "M"};
// //var nativeObjectAssign = Object.assign({},a,b,c);
// //console.log(nativeObjectAssign);

// //var customObectAssign = objectAssign(a,b,c);
// //console.log(customObectAssign);

// const book = {
//     _id : "bk01",
//    title: "code hero",
//    author: "paullaster"
// }

// console.log(objectModify(book)[1]);

// const mapTest = [2,4,6,8,10,12,14,16,18,20];
// console.log(map(mapTest, (i)=>{
//     return i*i
// }));
let apressBooks = [
    {
    name : "beginners",
    bookDetails : [
    {
    "id": 111,
    "title": "C# 6.0",
    "author": "ANDREW TROELSEN",
    "rating": [4.7],
    "reviews": [{good : 4 ,
    excellent : 12}]
    },
    {
    "id": 222,
    "title": "Efficient Learning Machines",
    "author": "Rahul Khanna",
    "rating": [4.5],
    "reviews": []
    }
    ]
    },
    {
        name : "pro",
        bookDetails : [
        {
        "id": 333,
        "title": "Pro AngularJS",
        "author": "Adam Freeman",
        "rating": [4.0],
        "reviews": []
        },
        {
        "id": 444,
        "title": "Pro ASP.NET",
        "author": "Adam Freeman",
        "rating": [4.2],
        "reviews": [{good : 14 ,
        excellent : 12}]
        }
        ]
        }
        ];
  console.log(
     filter( concatAll(
    map(apressBooks,(book) => {
    return book.bookDetails
    })
    ),(books) =>books.rating[0] >4.5));
        // let goodRatingBooks = map(filter(apressBooks, (book) => book.rating[0] > 4.5), (book) =>{
        //     return {title: book.title,author:book.author}

        // })
        
        // console.log(goodRatingBooks);

        const dummieArray = [1,2,3,4,5,6,7,8,9,10];
       console.log( reduce(dummieArray, (summation, value) =>{
            return summation * value;
        },10));

    let  bookDetails = concatAll(
        map(apressBooks, (books) =>{
            return books.bookDetails;
        })
    );
   const reduceResult = reduce(bookDetails, (accumulator, values) =>{
        let goodReviews = values.reviews[0] !== undefined ? values.reviews[0].good : 0;
        let excellentReviews = values.reviews[0] !== undefined ? values.reviews[0].excellent : 0;
        return {good: accumulator.good + goodReviews, excellent: accumulator.excellent + excellentReviews};
    }, {good:0, excellent:0});

    console.log(reduceResult);