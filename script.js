// 1-5

// let usersAge = [20, 21, 22, 23, 30];

// let usersName = ['Alex', 'Kate', 'Jack', 'Alice', 'Dave'];

// let UsersInfo = ['Jane', 25, 1995, true, false];

// let listEmpty = [];

// listEmpty[3] = 'Nick';
// console.log(listEmpty[3]);

// listEmpty[5] = 22;
// console.log(listEmpty[5]);

// listEmpty[7] = true;
// console.log(listEmpty[7]);

//7

// for ( i = 0; i < 10; i++ ) {
//   document.write(i + '<div>Hello message</div>');
// }

// 8

// for (let i = 0; i < 10; i++) {
// document.write(`<div>Hello message index ${i}</div>`);
// }

// 9

// let i = 0;
//     while (i < 20){
//         document.write(`<h1>Hello message</h1>`);
//         i++;
//     }

//10

    // let i = 0;
    // while (i < 20){
    //     document.write(`<h1>Hello message index ${i}</h1>`);
    //     i++;
    // }
    
//11

// let numbersArray = [1,2,3,4,5,6,7,8,9,10];

// for (let i=0; i < numbersArray.length; i++) {
//     console.log(numbersArray[i]);
// }

//12

// let wordsArray = ['Alex', 'Kate', 'Jack', 'Alice', 'Dave', 'John', 'Anna', 'Kylie', 'David', 'Lilly'];
// for (let i=0; i < wordsArray.length; i++) {
//     console.log(wordsArray[i]);
// }

//13-16

// let generalArray = ['Alex', 22, 'Jack', true, 50, 'John', false, 'Kylie', 33, 'Lilly'];
// for (let i=0; i < generalArray.length; i++) {
//     console.log(generalArray[i]);
// }
// console.log()
// for (let i=0; i < generalArray.length; i++) {
//         if (typeof generalArray[i] === 'boolean') {
//             console.log(generalArray[i]);
//         }
//     }
//     console.log();
//     console.log('string');
//     console.log();
//     for (let i=0; i < generalArray.length; i++) {
//         if (typeof generalArray[i] === 'string') {
//             console.log(generalArray[i]);
//             }
//     }
//     console.log();
//     console.log('number');
//     console.log();
//     for (let i=0; i < generalArray.length; i++) {
//         if (typeof generalArray[i] === 'number') {
//             console.log(generalArray[i]);
//             }
//     }
//
//17
//
// let newArray = [];
// newArray[0] = 1;
// newArray[1] = 'Hello';
// newArray[2] = 3;
// newArray[3] = true;
// newArray[4] = 'World';
// newArray[5] = 5;
// newArray[6] = 7;
// newArray[7] = false;
// newArray[8] = 'Info';
// newArray[9] = 9;
// newArray[10] = true;
// for (let i = 0; i < 10; i++) {
//     console.log(newArray[i])
// }
//
//18
// console.log()
// for (let array1 = 0; array1 <= 10; array1++) {
//     console.log(array1);
// document.write(array1);
// }
//
//19
//
// console.log()
// for (let array2 = 0; array2 <= 100; array2++) {
//     console.log(array2);
// document.write(array2);
// }
//20
// console.log()
// for (let array3 = 0; array3 <= 100; array3+= 2) {
//     console.log(array3);
// document.write(array3);
// }

//21
// console.log()
// for (let array4 = 0; array4 <= 100; array4++) {
//     if (array4 % 2 === 0){
//         console.log(array4);
// document.write(array4);
//     }

// }

//22
// console.log()
// for (let array5 = 0; array5 <= 100; array5++) {
//     if (array5 % 2 != 0) {
//         console.log(array5);
// document.write(array5);
//     }
// }

//23
//
// for (let m = 0; m <= 2; m++) {
//     for (let s = 0; s < 60; s++) {
//         console.log(`${m} min ${s} sec`);
//         document.write(`${m} min ${s} sec`);
//         document.write('<br>');
//         if (m == 2) break
//     }
// }
//24
//
// for (let h = 0; h <= 2; h++) {
//     for (let m = 0; m < 60; m++) {
//         for (let s = 0; s < 60; s++) {
//             console.log(`${h} hours ${m}min ${s}sec`);
// document.write(`${h} hours ${m}min ${s}sec`);
//             if (h === 2 && m === 20 && s === 0) break;
//         }
//         if (h === 2 && m === 20) break;
//     }
// }

//26

// let arr1 = ['a', 'b', 'c'];
// let result1 = ''
// for(i = 0; i < arr1.length; i++){
//     result1 = result1.concat(arr1[i]);
// }
// console.log(result1);

//27

// let arr2 = ['a', 'b', 'c']
// let result2 = '';
// let i = 0;
// while(i < arr2.length){
//     result2 = result2.concat(arr2[i]);
//     i++;
// }
// console.log(result2);
//
//28
//
// let arr3 = ['a', 'b', 'c'];
// let result3 = '';

// for (let element of arr3) {
//     result3= result3.concat(element);
// }
// console.log(result3);
//
//29
//
// let arr4 = ['a', 'b', 'c'];
// let result4 = '';

// for(let element in arr4){
//     result4=result4.concat(arr4[element]);
// }
// console.log(result4);
//______
//36
//
// let arr5 = ['a', 'b', 'c'];
// let numArray5 = [1,2,3];
//37
// for(let element of numArray5){
//     arr5.push(element);
// }
// console.log(arr5);
//38
// let newArr1 = [1,2,3];
// let newArr2 = newArr1.reverse();
// console.log(newArr2);
//
//39
//
// let newArr3 = [1,2,3];
// let newArr4 = newArr3.concat(4, 5, 6);
// console.log(newArr4);
//
//40
//
// let newArr5 = [1,2,3];
// newArr5.unshift(4, 5, 6);
// console.log(newArr5);
//
//41
//
// let strArray1 = ['js', 'css', 'jq'];
// console.log(strArray1.shift());
//
//___________________________________
//
// strArray2 = ['js', 'css', 'jq'];
// console.log(strArray2.pop());
//___________________________________
//
// let numbersArray1 = [1, 2, 3, 4, 5];
// let numbersArray2 = numbersArray1.slice(3, 5);
// console.log(numbersArray2);
//___________________________________
//
// let numbersArray3 = [1, 2, 3, 4, 5];
// let numbersArray4 = numbersArray3.slice(0, 2);
// console.log(numbersArray4);
//___________________________________
//
// let numbersArray5 = [1, 2, 3, 4, 5]
// numbersArray5.splice(1, 2);
// console.log(numbersArray5);
//___________________________________
//
// let strSpliceArr = [1, 2, 3, 4, 5]
// strSpliceArr.splice(3, 0, 'a', 'b', 'c');
// console.log(strSpliceArr);
//___________________________________
//
// let strSpliceArr1 = [1, 2, 3, 4, 5]
// strSpliceArr1.splice(1, 0, 'a', 'b');
// strSpliceArr1.splice(6, 0, 'c');
// strSpliceArr1.splice(8, 0, 'e');
// console.log(strSpliceArr1);
//___________________________________
//
// let newNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for(let element of newNumArray){
//     if (element % 2 === 0){
//         console.log(element);
//     }
// }
//___________________________________
// let newNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let resNumArray = [];
// for(let element of newNumArray){
//     resNumArray.push(element);
// }
// console.log(resNumArray);
//
// let newNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let resNumArray = [];
// for(let i = 0; i < newNumArray.length; i++){
// resNumArray[i] = newNumArray[i];
// }
// console.log(resNumArray);
//
