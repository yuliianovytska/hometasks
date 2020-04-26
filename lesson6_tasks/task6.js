//- создать массив с 20 числами.
//-- при помощи метода sort и колбека  отсортировать массив.

let numbersArr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 2, 4, 6, 8, 10, 12, 14, 16, 18];

//-- при помощи метода sort и колбека  отсортировать массив.

let sortedArray = numbersArr.sort(function(a,b) {return a - b});
console.log(sortedArray);


//-- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

let newSortedArray = numbersArr.sort(function(a,b) {return b - a});
console.log(newSortedArray);

//-- при помощи filter получить числа кратные 3

let multipleArray = numbersArr.filter(function (number) {
    if (number % 3 === 0){
        return true;
    } else {
        return false;
    }
});

console.log(multipleArray);

//-- при помощи filter получить числа кратные 10

let newMultipleArray = numbersArr.filter(function (number) {
    if (number % 10 === 0){
        return true;
    } else {
        return false;
    }
});

console.log(newMultipleArray);

//-- перебрать (проитерировать) массив при помощи foreach()

let checkedArray = [];

numbersArr.forEach( function (value) {
    checkedArray.push(value);
});

console.log(checkedArray);

//-- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

let mapArray = numbersArr.map(function (value) {
    return value * 3;
});
console.log(mapArray);

//- создать массив со словами на 15-20 элементов.

let words = ['this', 'is', 'a', 'new', 'array', 'with', 'random', 'words', 'and', 'without', 'any', 'special', 'goal', 'or', 'occasion'];

//-- отсортировать его по алфавиту в восходящем порядке.

let wordsIncreasedList = words.sort()
console.log(wordsIncreasedList);

//-- отсортировать его по алфавиту  в нисходящем порядке.

let wordsDecreasedList = words.sort(function(a,b){
    if (a >b){
        return -1;
    } else {
        return 0;
    };
});

console.log(wordsDecreasedList);

//-- отфильтровать слова длиной менее 4х символов

let shortWordsList = words.filter(function (word){
        if (word.length < 4) {
            return false;
        } else {
            return true;
        }
});

console.log(shortWordsList);

//-- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

let wordsWithExclamationMark = words.map(function (word) {
    return word + '!';
});
console.log(wordsWithExclamationMark);

//Дан масив :

let users = [ 
    {name: 'vasya', age: 31, status: false}, 
    {name: 'petya', age: 30, status: true}, 
    {name: 'kolya', age: 29, status: true}, 
    {name: 'olya', age: 28, status: false}, 
    {name: 'max', age: 30, status: true}, 
    {name: 'anya', age: 31, status: false}, 
    {name: 'oleg', age: 28, status: false}, 
    {name: 'andrey', age: 29, status: true}, 
    {name: 'masha', age: 30, status: true}, 
    {name: 'olya', age: 31, status: false}, 
    {name: 'max', age: 31, status: true} 
];

//- відсортувати його за  віком (зростання , а потім окремо спадання);

let sortedUsers = users.sort(function(a,b) {return a.age - b.age});
console.log(sortedUsers);


let newSortedUsers = users.sort(function(a,b) {return b.age - a.age});
console.log(newSortedUsers);

//- відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

let newUsers = JSON.parse(JSON.stringify(users));

let sortedInIncreasingOrder = newUsers.sort( function (a,b) {return a.name.length - b.name.length});
console.log(sortedInIncreasingOrder);

let sortedInDecreasingOrder = newUsers.sort( function (a,b) {return b.name.length - a.name.length});
console.log(sortedInDecreasingOrder);

//- пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

let usersWithID = newUsers.map(function (user, index) {
    user.id = index;
    return user;
});
console.log(usersWithID);

//- відсортувати його за індентифікатором

let sortedByID = usersWithID.sort( function (a,b) {return a.id - b.id});
console.log(sortedByID);

//-- наисать функцию калькулятора с 2мя числами и колбеком

function calculatorFor2Values(a, b, callback) {
    return callback(a,b);
};

let addition = calculatorFor2Values(5, 7, function add(a,b) {
    return a + b;
});

console.log(addition);

//-- наисать функцию калькулятора с 3мя числами и колбеком

function calculatorFor3Values(a, b, c, callback) {
    return callback(a,b,c);
};

let calculation = calculatorFor3Values(5, 7, 2, function calculate(a, b, c) {
    return a + b * c;
});

console.log(calculation);