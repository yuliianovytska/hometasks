// --створити масив та вивести його в консоль:
//- з 5 числових значень
//- з 5 стічкових значень
//- з 5 значень стрічкового, числового та булевого типу
//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
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
//
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for ( let i = 0; i < 10; i++ ) {
//   document.write(i + '<div>Hello message</div>');
// }

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
// document.write(`<div>Hello message index ${i}</div>`);
// }

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
//     while (i < 20){
//         document.write(`<h1>Hello message</h1>`);
//         i++;
//     }

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

    // let i = 0;
    // while (i < 20){
    //     document.write(`<h1>Hello message index ${i}</h1>`);
    //     i++;
    // }
    
//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let numbersArray = [1,2,3,4,5,6,7,8,9,10];

// for (let i=0; i < numbersArray.length; i++) {
//     console.log(numbersArray[i]);
// }

//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let wordsArray = ['Alex', 'Kate', 'Jack', 'Alice', 'Dave', 'John', 'Anna', 'Kylie', 'David', 'Lilly'];
// for (let i=0; i < wordsArray.length; i++) {
//     console.log(wordsArray[i]);
// }

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

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
//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
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
//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
    // document.write(i);
//}
//
//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i <= 100; i++) {
//     console.log(i);
    // document.write(i);
//}
//
//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let array = 0; array <= 100; array+= 2) {
//     console.log(array);
// document.write(array);
//}
//
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
// for (let array4 = 0; array4 <= 100; array4++) {
//     if (array4 % 2 === 0){
//         console.log(array4);
// document.write(array4);
//     }

// }

//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for (let array5 = 0; array5 <= 100; array5++) {
//     if (array5 % 2 !== 0) {
//         console.log(array5);
// document.write(array5);
//     }
// }

//- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
//
// for (let m = 0; m <= 2; m++) {
//     for (let s = 0; s < 60; s++) {
//         console.log(`${m} min ${s} sec`);
//         document.write(`${m} min ${s} sec`);
//         document.write('<br>');
//         if (m == 2) break
//     }
// }
//- Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
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

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let arr1 = ['a', 'b', 'c'];
// let result1 = ''
// for(i = 0; i < arr1.length; i++){
//     result1 = result1.concat(arr1[i]);
// }
// console.log(result1);

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let arr2 = ['a', 'b', 'c']
// let result2 = '';
// let i = 0;
// while(i < arr2.length){
//     result2 = result2.concat(arr2[i]);
//     i++;
// }
// console.log(result2);
//
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//
// let arr3 = ['a', 'b', 'c'];
// let result3 = '';

// for (let element of arr3) {
//     result3= result3.concat(element);
// }
// console.log(result3);
//
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.
//
// let arr4 = ['a', 'b', 'c'];
// let result4 = '';

// for(let element in arr4){
//     result4=result4.concat(arr4[element]);
// }
// console.log(result4);
//
//- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
//
// let arr5 = ['a', 'b', 'c'];
// let numArray5 = [1,2,3];
// for(let element of numArray5){
//     arr5.push(element);
// }
// console.log(arr5);
//
//- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
//
// let newArr1 = [1,2,3];
// let newArr2 = newArr1.reverse();
// console.log(newArr2);
//
//- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
//
// let newArr3 = [1,2,3];
// let newArr4 = newArr3.concat(4, 5, 6);
// console.log(newArr4);
//
//- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
//
// let newArr5 = [1,2,3];
// newArr5.unshift(4, 5, 6);
// console.log(newArr5);
//
//- Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
//
// let strArray1 = ['js', 'css', 'jq'];
// console.log(strArray1.shift());
//
//- Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
//
// strArray2 = ['js', 'css', 'jq'];
// console.log(strArray2.pop());
//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
//
// let numbersArray1 = [1, 2, 3, 4, 5];
// let numbersArray2 = numbersArray1.slice(3, 5);
// console.log(numbersArray2);
//
//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
//
// let numbersArray3 = [1, 2, 3, 4, 5];
// let numbersArray4 = numbersArray3.slice(0, 2);
// console.log(numbersArray4);
//
//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
//
// let numbersArray5 = [1, 2, 3, 4, 5]
// numbersArray5.splice(1, 2);
// console.log(numbersArray5);
//
//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//
// let strSpliceArr = [1, 2, 3, 4, 5]
// strSpliceArr.splice(3, 0, 'a', 'b', 'c');
// console.log(strSpliceArr);
//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//
// let strSpliceArr1 = [1, 2, 3, 4, 5]
// strSpliceArr1.splice(1, 0, 'a', 'b');
// strSpliceArr1.splice(6, 0, 'c');
// strSpliceArr1.splice(8, 0, 'e');
// console.log(strSpliceArr1);
//
//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// let newNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for(let element of newNumArray){
//     if (element % 2 === 0){
//         console.log(element);
//     }
// }
//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
//
// let newNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let resNumArray = [];
// for(let element of newNumArray){
//     resNumArray.push(element);
// }
// console.log(resNumArray);
//
//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// let newNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let resNumArray = [];
// for(let i = 0; i < newNumArray.length; i++){
// resNumArray[i] = newNumArray[i];
// }
// console.log(resNumArray);
//
//Practice tasks
//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//
let arrKnown = [2,17,13,6,22,31,45,66,100,-18];
//
//1. перебрати його циклом while
//
// let i = 0;
// while (i < arrKnown.length){
//     console.log(arrKnown[i]);
//     i++;
//}
//2. перебрати його циклом for
//
// for( i = 0; i < arrKnown.length; i++){
//     console.log(arrKnown[i]);
// }
//
//3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// while (i < arrKnown.length) {
//      if(arrKnown[i] % 2 !== 0){
//         console.log(arrKnown[i]);
//      }
//      i++
// }
//4. перебрати циклом for та вивести  числа тільки з непарним індексом
//
// for(i = 0; i < arrKnown.length; i++){
//     if(arrKnown[i] % 2 !== 0){
//        console.log(arrKnown[i]);
//     }
// }
//5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < arrKnown.length) {
//      if(arrKnown[i] % 2 === 0){
//         console.log(arrKnown[i]);
//      }
//      i++
// }
//
//6. перебрати циклом for та вивести  числа тільки парні  значення
//
// for(i = 0; i < arrKnown.length; i++){
//     if(arrKnown[i] % 2 === 0){
//        console.log(arrKnown[i]);
//     }
// }
//7. замінити кожне число кратне 3 на слово "okten"
// for(i = 0; i < arrKnown.length; i++){
//     if(arrKnown[i] % 3 === 0){
//     arrKnown[i] = 'okten';
//     } 
// }
// console.log(arrKnown);
//

