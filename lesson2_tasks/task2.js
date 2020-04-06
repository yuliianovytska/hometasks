
//- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

// let human = {
//     name: 'Kate',
//     gender: 'female',
//     age: 20,
//     married: true
// };

// let house = {
//     name: 'condo',
//     squarefoot: 40,
//     withgarage: true,
//     additional: 'guest bedroom'
// };

// let car = {
//     name: 'Toyota',
//     model: 'Land Cruiser 300',
//     year: 2015,
//     isworking: true
// };

// let pet = {
//     name: 'Nora',
//     age: 7,
//     purebred: true,
//     breed: 'American Pitbull Terier'
// };

// let city = {
//     name: 'Lviv',
//     districts: 6,
//     capital: false
// };

//- создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

// let man = {
//     name: 'Jake',
//     gender: 'male',
//     hobbies: ['jogging','videogames'],
//     wife: { name: 'Jill', age: 25} 
// };

// let woman = {
//     name: 'Jenny',
//     education: ['bachelor`s degree','business school'],
//     kids: { name: 'Anna', age: 5} 
// };

// let student = {
//     name: 'Taylor',
//     gender: 'male',
//     subjects: ['math','chemistry'],
//    performance: { test: 'common core', score: 90} 
// };

// let place = {
//     name: 'resort',
//     square: 2040,
//     activities: ['tennis','golf', 'soccer'],
//     services: { paid: 'barbecue', free: 'parking'} 
// };

// let product = {
//     name: 'laptop',
//     brand: 'Apple',
//     maincharacteristics: ['2.6GHz 6‑core Intel Core i7','16 GB DDR4'],
//     services: { guarantee: true, price: 2399} 
// };

//При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for(key in human){
//     console.log(key);
// };
// for(key in house){
//     console.log(key);
// };
// for(key in car){
//     console.log(key);
// };
// for(key in pet){
//     console.log(key);
// };
// for(key in city){
//     console.log(key);
// };
// for(key in man){
//     console.log(key);
// };
// for(key in woman){
//     console.log(key);
// };
// for(key in student){
//     console.log(key);
// };
// for(key in place){
//     console.log(key);
// };
// for(key in product){
//     console.log(key);
// };

//- При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// console.log(Object.keys(human));
// console.log(Object.keys(house));
// console.log(Object.keys(car));
// console.log(Object.keys(pet));
// console.log(Object.keys(city));
// console.log(Object.keys(man));
// console.log(Object.keys(woman));
// console.log(Object.keys(student));
// console.log(Object.keys(place));
// console.log(Object.keys(product));

//- Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными).

// let cars = [
//     {model: 'Lexus IS 250', year: 2011, enginepower: 208, color: 'silver'},
//     {model: 'Mercedes-Benz C 200', year: 2017, enginepower: 184, color: 'black'},
//     {model: 'Ford Ranger', year: 2019, enginepower: 170, color: 'grey'},
//     {model: 'Audi A6', year: 2012, enginepower: 303, color: 'red'},
//     {model: 'Mazda CX-5', year: 2017, enginepower: 192, color: 'blue'},
//     {model: 'BMW X5', year: 2012, enginepower: 285, color: 'dark grey'},
//     {model: 'Toyota Land Cruiser 200', year: 2017, enginepower: 227, color: 'beige'},
//     {model: 'Audi Q5', year: 2013, enginepower: 211, color: 'brown'},
//     {model: 'Jeep Cherokee', year: 2016, enginepower: 274, color: 'crystal metallic'},
//     {model: 'Nissan Murano', year: 2018, enginepower: 233, color: 'white'}
// ];


//- Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

// let cities = [
//     {name: 'Bangkok', population: 8280925, country: 'Thailand', region: 'Central Thailand' },
//     {name: 'Paris', population: 2148271, country: 'France', region: 'Ile-de-France'},
//     {name: 'London', population: 8908081, country: 'United Kingdom', region: 'Greater London'},
//     {name: 'Dubai', population: 3331000, country: 'United Arab Emirates', region: 'Dubai emirate'},
//     {name: 'Singapore', population: 5838862, country: 'Singapore', region: 'Central region'},
//     {name: 'Kuala Lumpur', population: 7997000, country: 'Malaysia', region: 'Selangor'},
//     {name: 'New York', population: 18804000, country: 'United States', region: 'New York'},
//     {name: 'Istanbul', population: 15520000, country: 'Turkey', region: 'Istanbul region'},
//     {name: 'Tokyo', population: 37393000, country: 'Japan', region: 'Kanto'},
//     {name: 'Antalya', population: 2280000, country: 'Turkey', region: 'Mediterranean'}
// ];

//Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

// let cars1 = [
//     {model: 'Lexus RX 350', year: 2015, enginepower: 270, color: 'black',
//     driver: {name: 'John', age: 30, gender: 'male', drivingexperience: '3 years'}},
    
//     {model: 'Mercedes-Benz S550', year: 2014, enginepower: 440, color: 'dark grey', 
//     driver:{name: 'Kevin', age: 28, gender: 'male', drivingexperience: '5 years'}},
    
//     {model: 'Ford Escape', year: 2014, enginepower: 178, color: 'grey', 
//     driver: {name: 'Kelly', age: 33, gender: 'female', drivingexperience: '9 years'}},
    
//     {model: 'Audi Q7', year: 2015, enginepower: 280, color: 'dark green', 
//     driver: {name: 'Eva', age: 26, gender: 'female', drivingexperience: '4 years'}},
    
//     {model: 'Mazda CX-7', year: 2015, enginepower: 244, color: 'white', 
//     driver: {name: 'Michael', age: 24, gender: 'male', drivingexperience: '2 years'}},
    
//     {model: 'BMW X1', year: 2014, enginepower: 240, color: 'light brown', 
//     driver: {name: 'Lisa', age: 25, gender: 'female', drivingexperience: '5 years'}},
    
//     {model: 'Toyota Prado G150', year: 2013, enginepower: 177, color: 'dark green', 
//     driver: {name: 'Jack', age: 31, gender: 'male', drivingexperience: '5 years'}},
    
//     {model: 'Mitsubishi Pajero', year: 2018, enginepower: 175, color: 'pure black', 
//     driver: {name: 'Dan', age: 34, gender: 'male', drivingexperience: '6 years'}},
    
//     {model: 'Jeep Wrangler Rubicon', year: 2018, enginepower: 285, color: 'blue', 
//     driver: {name: 'Mary', age: 27, gender: 'female', drivingexperience: '4 years'}},
    
//     {model: 'Nissan Quashqai', year: 2015, enginepower: 113, color: 'black', 
//     driver: {name: 'Jannis', age: 30, gender: 'female', drivingexperience: '3 years'}}
// ];

//- проитерировать каждый массив из задания 5,6,7 при помощи while.

// let i = 0;
// while(i < cars.length){
//     console.log(cars[i]);
//     i++
// };
// let c = 0;
// while(c < cities.length){
//     console.log(cities[c]);
//     c++
// };
// let m = 0;
// while(i < cars1.length){
//     console.log(cars1[m]);
//     m++
// };

//- проитерировать каждый массив из задания 5,6,7 при помощи for .

// for(let i = 0; i < cars.length; i ++){
//     let car = cars[i];
//     console.log(cars[i]);
// };

// for(let i = 0; i < cities.length; i ++){
//     let city = cities[i];
//     console.log(cities[i]);
// };

// for(let i = 0; i < cars1.length; i ++){
//     let car1 = cars1[i];
//     console.log(cars1[i]);
// };

//- FINISH!проитерировать каждый массив из задания 5,6,7 при помощи  for of. 

// for(let car of cars){
//     console.log(car);
// }

// for(let city of cities){
//     console.log(city);
// }

// for(let car1 of cars1){
//     console.log(car1);
// }

//- взять объекты из задания 1 и превратить каждый в json.

// let humanJson = JSON.stringify(human);
// console.log(humanJson);

// let houseJson = JSON.stringify(house);
// console.log(houseJson);

// let carJson = JSON.stringify(car);
// console.log(carJson);

// let petJson = JSON.stringify(pet);
// console.log(petJson);

// let cityJson = JSON.stringify(city);
// console.log(cityJson);

//- взять json из задания 11 и превратить их обратно в объекты.

// let human1 = JSON.parse(humanJson);
// console.log(human1);

// let house1 = JSON.parse(houseJson);
// console.log(house1);

// let car1 = JSON.parse(carJson);
// console.log(car1);

// let pet1 = JSON.parse(petJson);
// console.log(pet1);

// let city1 = JSON.parse(cityJson);
// console.log(city1);

//- взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// for (let i = 0; i < cars.length; i++){
//     let carsNew = cars[i];
//     console.log(JSON.stringify(carsNew));
// }

//- взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// for (let i = 0; i < cities.length; i++){
//     let citiesNew = cities[i];
//     console.log(JSON.stringify(citiesNew));
// }

//- взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// let cars1fromJSON = [];

// for (let i = 0; i < cars1.length; i++){
//     let cars1New = cars1[i];
//     cars1fromJSON.push(JSON.stringify(cars1New));
//     console.log(cars1fromJSON);
// }

//- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

// let usersCreated = [
//     {name: 'Liza', age: 23, city: 'Porto',
//     skills: 'Django, Python, SQL, JavaScript, React'},

//     {name: 'Andy', age: 25, city: 'Bern',
//     skills: 'MuleSoft, JavaScript/NodeJS, REST API, JSON, Express.js'},

//     {name: 'Michael', age: 27, city: 'London',
//     skills: 'Java, Spring, Spring Boot, MongoDB, MySQL'},

//     {name: 'Friedrich', age: 28, city: 'Leipzig',
//     skills: 'Laravel, Lumen, Yii2, Yii1, PHP (OOP, SOLID, MVC), Node.js, REST, MySQL, Redis, Kafka'},

//     {name: 'Milena', age: 24, city: 'Warsaw',
//     skills: 'Swift, iOS, Git, Xcode, UIKit, MVC, Objective-C, CoreData, OOP, REST API, CocoaPods'}
// ];

// for (let i = 0; i < usersCreated.length; i++){
// let users1 = usersCreated[i];
// console.log(usersCreated[i]);
// }; 

// for(let user of usersCreated){
//     console.log(user.name);
//     for(let skill of user.skills){
//         console.log(skill);
//     }
// };

//- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

// let usersNew = [
//     {name: 'Jenny', age: 24, city: 'Lisboa',
//     skills: 'Python, Django, SQL, JavaScript, React'},

//     {name: 'Linda', age: 25, city: 'Oslo',
//     skills: 'JavaScript/NodeJS, MuleSoft, REST API, JSON'},

//     {name: 'Dave', age: 27, city: 'Bonn',
//     skills: 'Java, Spring, MongoDB, MySQL'},

//     {name: 'Karol', age: 25, city: 'Dresden',
//     skills: 'PHP, Node.js, REST, MySQL, Redis, Kafka'},

//     {name: 'Denny', age: 28, city: 'Lion',
//     skills: 'iOS, Swift, Xcode, , MVC, Objective-C,  OOP, REST API, CocoaPods'}
// ];

// for (let i = 0; i < usersNew.length; i++){
//     let usersNew1 = usersNew[i];
//     console.log(usersNew[i]);
// }; 

// let usersNewSkills = [];
// for(let user of usersNew){
//     console.log(user.name);
//     for(let skill of user.skills){
//         console.log(skill);
//         usersNewSkills.push(skill);
//     };
// };
// console.log(usersNewSkills);

//- За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

// let users = [
//     {name: 'vasya', age: 31, status: false,skills: ['java', 'js']}, 
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, 
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
// ];

// for (let i = 0; i < users.length; i++){
//     let allusers = users[i];
//     console.log(users[i]);
// }; 
    
// for(let user of users){
//         console.log(user.name);
//     for(let skill of user.skills){
//             console.log(skill);
//     }
// };

//- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// let usersAddresses = [];
// for(let user of users){
//     console.log(user.name);
//     for(let address of user.name){
//         console.log(address);
//         usersAddresses.push(address);
//     };
// };
// console.log(usersAddresses);

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for(let user of users){
//     let div = document.createElement('div');
//     div.innerHTML = user.name + ' ' + user.age + ' ' + user.status + ' ' + user.address.city + ' ' + user.address.country + ' ' + user.address.street + ' ' + user.address.houseNumber;
//     document.body.appendChild(div);
// }

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// for(let user of users){
//     let mainDiv = document.createElement('div');
//     let nameDiv = document.createElement('div');
//     nameDiv.innerHTML = user.name;
//     let ageDiv = document.createElement('div');
//     ageDiv.innerHTML = user.age;
//     let statusDiv = document.createElement('div');
//     statusDiv.innerHTML = user.status;
//     let addressDiv = document.createElement('div');
//     addressDiv.innerHTML = user.address.city + ' ' + user.address.country + ' ' + user.address.street + ' ' + user.address.houseNumber;
    
//     mainDiv.appendChild(nameDiv);
//     mainDiv.appendChild(ageDiv);
//     mainDiv.appendChild(statusDiv);
//     mainDiv.appendChild(addressDiv);

//     document.body.appendChild(mainDiv);
// }

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for(let user of users){
//     let mainDiv = document.createElement('div');
//     let nameDiv = document.createElement('div');
//     let br = document.createElement('br');
//     nameDiv.innerHTML = user.name;
//     let ageDiv = document.createElement('div');
//     ageDiv.innerHTML = user.age;
//     let statusDiv = document.createElement('div');
//     statusDiv.innerHTML = user.status;
//     let addressDiv = document.createElement('div');
//     let cityDiv = document.createElement('div');
//     cityDiv.innerHTML = user.address.city;
//     let countryDiv = document.createElement('div');
//     countryDiv.innerHTML = user.address.country;
//     let streetDiv = document.createElement('div');
//     streetDiv.innerHTML = user.address.street;
//     let houseNumberDiv = document.createElement('div');
//     houseNumberDiv.innerHTML = user.address.houseNumber;

//     mainDiv.appendChild(br);
//     mainDiv.appendChild(nameDiv);
//     mainDiv.appendChild(ageDiv);
//     mainDiv.appendChild(statusDiv);
//     mainDiv.appendChild(addressDiv);
//     addressDiv.appendChild(cityDiv);
//     addressDiv.appendChild(countryDiv);
//     addressDiv.appendChild(streetDiv);
//     addressDiv.appendChild(houseNumberDiv);

//     document.body.appendChild(mainDiv);
// };

//- Дано 2 масиви з рівною кількістю об'єктів.
//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//Записати цей об'єкт в новий масив

// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];


// for(let user of usersWithId){
//     for( let city of citiesWithId){
//         if(user.id === city.user_id){
//             user.address = city;
//             let usersWithCities = usersWithId;
//             console.log(usersWithCities);
//         };
//     };
// };

//!- створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

// let divId = document.getElementById('task');
// let viewId = divId.innerHTML;
// console.log(viewId);

// let divClass = document.getElementsByClassName('tasks');
// let viewClass = divClass[0].innerHTML;
// console.log(viewClass);
// for(let view in viewClass){
//     viewClass.innerHTML = 'This is new step';
// };

// let divTags = document.getElementsByTagName('p');
// let viewParagraphs = divTags[0].innerHTML;
// console.log(viewParagraphs);
// divTags.innerHTML = 'This is a new paragraph';

//! - змінити цей текст використовуючи селектори id, class,  tag
//! - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

//- за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

// let table = document.createElement('table');
// let row = document.createElement('tr');
// let column1 = document.createElement('td');
// let column2 = document.createElement('td');
// let column3 = document.createElement('td');
// row.appendChild(column1);
// row.appendChild(column2);
// row.appendChild(column3);
// table.appendChild(row);
// document.body.appendChild(table);

//- за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

// let table1 = document.createElement('table');

// for (let i = 0; i < 10; i++){
//     let row = document.createElement('tr');
//     let column1 = document.createElement('td');
//     let column2 = document.createElement('td');
//     let column3 = document.createElement('td');
//     row.appendChild(column1);
//     row.appendChild(column2);
//     row.appendChild(column3);
//     table.appendChild(row);
// };
// document.body.appendChild(table1);

//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

// let table2 = document.createElement('table');

// for(let i = 0; i < 10; i++){
//     let row = document.createElement('tr');
//     for (let i = 0; i < 5; i++){
//         let column = document.createElement('td');
//         row.appendChild(column);
//     }
//     table2.appendChild(row);
// }
// document.body.appendChild(table2);

//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

// let table3 = document.createElement('table');

// let n = parseInt(prompt('Enter row number:'));
// let m = parseInt(prompt('Enter column number:'));

// console.log(typeof(m));
// console.log(typeof(n));

// for(let i = 0; i < n; i++){
//     let row = document.createElement('tr');
//     for(let i = 0; i < m; i++){
//         let column = document.createElement('td');
//         row.appendChild(column);
//     }
//     table3.appendChild(row);
// }

// document.body.appendChild(table3);

//!!--Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//!!  - знайти всі елементі, які мають class
// !! - знайти всі параграфи ,та змінити текст на hello oktenweb!
// !! - знайти всі div та змінити ім колір на червоний




