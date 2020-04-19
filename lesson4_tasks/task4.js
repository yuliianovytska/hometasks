//- створити функцію яка виводить масив

function printingArray(arg1) {
    for (let item of arg1) {
        console.log(item);
    }
}

// let arr = [1, 2, 3, 4, 5, 6, 7];
// printingArray(arr);

//- створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

function randomArray(){
let array = [];
    for(i = 0; i < 10; i++) {
    array[i] = Math.random() * (10 - 1) + 1;
    };
    printingArray(array);
}

// randomArray();

//- створити функцію яка приймає три числа та виводить та повертає найменьше.

function smallestNumber(arg1, arg2, arg3){
    let min = Math.min(arg1, arg2, arg3);
    console.log(min);
    return min;
};

// smallestNumber(2, 4, 6);

//- створити функцію яка приймає три числа та виводить та повертає найбільше.

function biggestNumber(arg1, arg2, arg3){
    let max = Math.max(arg1, arg2, arg3);
    console.log(max);
    return max;
};

// biggestNumber(5, 6, 2);

//- створити функцію яка виводить масив

function displayArray(arg1){
    for (let item of arg1){
        console.log(item);
    }
}

// let arr = [1, 2, 3, 4, 5, 6, 6]
// displayArray(arr)

//- створити функцію яка повертає найбільше число з масиву

function maxArray(arr){
    let max = arr[0];
    for (let item of arr){
        if (max < item){
            max = item;
        }
    }
    return max;
}

// let maxNumbers = [2, 4, 5, 7, 12, 17, 26];
// console.log(maxArray(maxNumbers));

//- створити функцію яка повертає найменьше число з масиву

function minArray(arr){
    let min = arr[0];
    for (let item of arr){
        if (min > item){
            min = item;
        }
    }
    return min;
}

let minNumbers = [1, 2, 3, 4, 0, 87, 6];
// console.log(minArray(minNumbers))

//- створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

function summationArray(arr){
    let sum = 0;
    for (let item of arr){
        sum += item;
        console.log(sum);
    }
    return sum;
}

// let arr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
// summationArray(arr);


//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function averageArray(arr){
    let sum = 0;
    for (let item of arr){
        sum += item;
        console.log(sum / arr.length);
    }
    return (sum / arr.length);
}

// let arr = [184, 55, 239, 78, 32, 49, 957];
// averageArray(arr);

//- Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

let objectsArray = [{name:'Anna', age: 20, city: 'Belgrade', ismarried: false},
{name: 'Andy', age: 25, city: 'Bern', ismarried: true},
{name: 'Alice', age: 25, city: 'Brno', ismarried: true}];

function objectsInArray(objects){
    let sumOfObjects = 0;
        for(let object of objects){
                sumOfObjects++;
        }
    return sumOfObjects;
};

// let valueOfArray = objectsInArray(objectsArray);
// console.log(valueOfArray);

//- Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

function fieldsOfArray(objects){
    let sumOfKeys = 0;
        for(let keyValues of objects){
            if(typeof keyValues === 'object'){
                for ( let key in keyValues){
                    sumOfKeys++;
                }
            }
        }
    return sumOfKeys;
};

// let fieldsofObjects = fieldsOfArray(objectsArray);
// console.log(fieldsofObjects);

//- створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

function sumOfIndex(arr1, arr2){
        let newArr = [];
        for (let i = 0; i < arr1.length; i++){
            newArr.push(arr1[i] + arr2[i]);
        }
        return newArr;
}

// let newArray = sumOfIndex([1, 2, 3, 4], [2, 3, 4, 5]);
// console.log(newArray);

//приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

function replaceIndex(arr, i){
let tmp = arr[i];
arr[i] = arr[i+1];
arr[i+1] = tmp;

return arr
};

// let arr = [1, 2, 3, 4, 5];
// let i = 1;
// console.log(replaceIndex(arr, i));

//створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень. Двожина масиву від 2 до 100

function replaceZero(arr){
    let arrOfZeroes = [];
    let arrOfNumbers = [];
    for (let element of arr){
        if(element === 0){
            arrOfZeroes.push(element);
        }
        else{
            arrOfNumbers.push(element);
        }
    }    
return arrOfNumbers.concat(arrOfZeroes); 
}

// let arr = [1, 3, 5, 0, 7, 0, 9]
// console.log(replaceZero(arr));

//Створити функцію яка :
//- Додає в боді блок з текстом "Hello owu"

function htmlBlock(){
    let block = document.createElement('div');
    block.innerHTML = 'Hello owu';
    document.body.appendChild(block);
}

// htmlBlock();

//- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

function htmlElement(text, paragraph){
    let block = document.createElement('div');
    paragraph = document.createElement(paragraph);
    paragraph.innerHTML = text;
    block.appendChild(paragraph);
    document.body.appendChild(block);
}

// htmlElement('This is text', 'p');

//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

function htmlArray(carsArray, paragraph){
    for( let item of carsArray){
        let block = document.createElement('div');
        let createParagraph = document.createElement(paragraph);
        createParagraph.innerHTML = item.model + ' ' + item.year + ' ' + item.enginepower + ' ' + item.color     
        block.appendChild(createParagraph);
        document.body.appendChild(block);
    }
}

let carsArray = [
        {model: 'Lexus IS 250', year: 2011, enginepower: 208, color: 'silver'},
        {model: 'Mercedes-Benz C 200', year: 2017, enginepower: 184, color: 'black'},
        {model: 'Ford Ranger', year: 2019, enginepower: 170, color: 'grey'},
        {model: 'Audi A6', year: 2012, enginepower: 303, color: 'red'},
        {model: 'Mazda CX-5', year: 2017, enginepower: 192, color: 'blue'},
        {model: 'BMW X5', year: 2012, enginepower: 285, color: 'dark grey'},
        {model: 'Toyota Land Cruiser 200', year: 2017, enginepower: 227, color: 'beige'},
        {model: 'Audi Q5', year: 2013, enginepower: 211, color: 'brown'},
        {model: 'Jeep Cherokee', year: 2016, enginepower: 274, color: 'crystal metallic'},
        {model: 'Nissan Murano', year: 2018, enginepower: 233, color: 'white'}
];

// htmlArray(carsArray, 'p');

//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.

function carsList(carsArray, paragraph){
    let block = document.createElement('div');
    let createParagraph = document.createElement(paragraph);
    createCarsList = JSON.stringify(carsArray);
    createParagraph.innerHTML = createCarsList;
    block.appendChild(createParagraph);
    document.body.appendChild(block);
}

// carsList(carsArray, 'p');

//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//Для кожної властивості створити всередені блока автомоблія свій блок

function carsInBlocks(cars){
    for(let car of cars){
        let divBlock = document.createElement('div');
            for (const key in car) {
                let innerDiv = document.createElement('div');
                    innerDiv.innerHTML = car[key];
                    divBlock.appendChild(innerDiv);
                };
            document.body.appendChild(divBlock);
            };
};

// carsInBlocks(carsArray);

//- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id", та повертає масив цих з'єднаних об'єктів.


function usersIdArray(users, cities){
    for(let user of users){
        for( let city of cities){
            if(user.id === city.user_id){
                user.address = city;
                let usersWithBothID = users;
                console.log(usersWithBothID);
            };
        };
    };
};

let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

// usersIdArray(usersWithId, citiesWithId);

//Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html



function rulesHTML(rules){
    let keys = Object.keys(rules[0]);
    for(let rule of rules){
        let divRules = document.createElement('div');
        let title = document.createElement('h2');
        title.innerHTML = rule[keys[0]];
        // divRules.innerHTML = keys[0];
        divRules.appendChild(title);
        let paragraph = document.createElement('p');
        paragraph.innerHTML = rule[keys[1]];
        divRules.appendChild(paragraph);
        document.body.appendChild(divRules);
    };
};

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

// rulesHTML(rules);