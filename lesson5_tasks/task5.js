//-  Створити функцію конструктор для об'єкту який описує теги

//  function HtmlTagDescriptor(titleOfTag, action, attrs) {
//      this.titleOfTag = titleOfTag;
//      this.action = action;
//      this.attrs = attrs;
// };

// let titleOfTag = '<a>';
// let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.';
// let attrs = [
//     {titleOfAttr:'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr:'coords', actionOfAttr: 'Устанавливает координаты активной области.'}   
// ];

// let tagA = new HtmlTagDescriptor(titleOfTag, action, attrs);
// console.log(tagA);

// let titleOfTag = 'div';
// let action = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.';
// let attrs = [
//     {titleOfAttr:'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//     {titleOfAttr:'coords', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}   
// ];

// let tagDiv = new HtmlTagDescriptor(titleOfTag, action, attrs);
// console.log(tagDiv);

// let titleOfTag = 'h1';
// let action = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня.';
// let attrs = [
//     {titleOfAttr:'align', actionOfAttr: 'Определяет выравнивание заголовка.'}  
// ];

// let tagH1 = new HtmlTagDescriptor(titleOfTag, action, attrs);
// console.log(tagH1);

// let titleOfTag = 'span';
// let action = 'Тег <span> предназначен для определения строчных элементов документа.';
// let attrs = [
//     {titleOfAttr:'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
//     {titleOfAttr:'contenteditable', actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'}  
// ];

// let tagSpan = new HtmlTagDescriptor(titleOfTag, action, attrs);
// console.log(tagSpan);

// let titleOfTag = 'input';
// let action = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.';
// let attrs = [
//     {titleOfAttr:'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//     {titleOfAttr:'align', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.'}  
// ];

// let tagInput = new HtmlTagDescriptor(titleOfTag, action, attrs);
// console.log(tagInput);

// let titleOfTag = 'form';
// let action = 'Тег <form> устанавливает форму на веб-странице. ';
// let attrs = [
//     {titleOfAttr:'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
//     {titleOfAttr:'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'}  
// ];

// let tagForm = new HtmlTagDescriptor(titleOfTag, action, attrs);
// console.log(tagForm);


// let titleOfTag = 'option';
// let action = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.';
// let attrs = [
//     {titleOfAttr:'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//     {titleOfAttr:'label', actionOfAttr: 'Указание метки пункта списка.'}  
// ];

// let tagOption = new HtmlTagDescriptor(titleOfTag, action, attrs);
// console.log(tagOption);

// let titleOfTag = 'select';
// let action = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.';
// let attrs = [
//     {titleOfAttr:'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
//     {titleOfAttr:'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'}  
// ];

// let tagSelect = new HtmlTagDescriptor(titleOfTag, action, attrs);
// console.log(tagSelect);

//-  Створити класс  для об'єкту який описує теги

// class TagDescriptions{
//     constructor(titleOfTag, action, attrs){
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;   
//     };
// };

// let titleOfTag = '<a>';
// let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.';
// let attrs = [
//     {titleOfAttr:'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr:'coords', actionOfAttr: 'Устанавливает координаты активной области.'}   
// ];

// let tagA = new TagDescriptions(titleOfTag, action, attrs);
// console.log(tagA);

//Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"

// let car = {
//     model: 'Land Cruiser 300',
//     manufacturer: 'Toyota',
//     year: 2017,
//     maxspeed: 370,
//     enginecapacity: 4.5,
//     driver: 'no',
//     drive: function(){
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     },
//     info: function(){
//         console.log(`
//         model: ${this.model},
//         manufacturer: ${this.manufacturer}, 
//         year: ${this.year}, 
//         maxspeed: ${this.maxspeed},
//         enginecapacity: ${this.enginecapacity},
//         driver: ${this.driver}`);
//     },
//     increaseMaxSpeed: function(newSpeed){
//         this.maxspeed = newSpeed
//     },
//     changeYear: function (newValue){
//         this.year = newValue;
//     },
//     addDriver: function (driverInfo){
//         this.driver = driverInfo;
//     },
// };

// let driverInfo = {name: 'John', age: 30, hasExperience: true};


// car.increaseMaxSpeed(300);
// car.changeYear(2018);
// car.addDriver(driverInfo);
// car.drive();
// car.info();

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції

// function carConstructor(model, manufacturer, year, maxspeed, enginecapacity, driver){
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.enginecapacity = enginecapacity;
//     this.driver = driver;
//     this.drive = function(){
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     },
//     this.info = function(){
//         console.log(`
//         model: ${this.model},
//         manufacturer: ${this.manufacturer}, 
//         year: ${this.year}, 
//         maxspeed: ${this.maxspeed},
//         enginecapacity: ${this.enginecapacity},
//         driver: ${this.driver}`);
//     },
//     this.increaseMaxSpeed = function(newSpeed){
//         this.maxspeed = newSpeed
//     },
//     this.changeYear = function (newValue){
//         this.year = newValue;
//     },
//     this.addDriver = function (driverInfo){
//         this.driver = driverInfo;
//     }
// };

// let car = new carConstructor('Land Cruiser 300', 'Toyota', 2017, 370, 4.5);
// let driverInfo = {name: 'John', age: 30, hasExperience: true};


// car.increaseMaxSpeed(300);
// car.changeYear(2018);
// car.addDriver(driverInfo);
// car.drive();
// car.info()

//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції

// class CarDescriptions{
// carConstructor(model, manufacturer, year, maxspeed, enginecapacity, driver){
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.enginecapacity = enginecapacity;
//         this.driver = driver;
//         this.drive = function(){
//             console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//         },
//         this.info = function(){
//             console.log(`
//             model: ${this.model},
//             manufacturer: ${this.manufacturer}, 
//             year: ${this.year}, 
//             maxspeed: ${this.maxspeed},
//             enginecapacity: ${this.enginecapacity},
//             driver: ${this.driver}`);
//         },
//         this.increaseMaxSpeed = function(newSpeed){
//             this.maxspeed = newSpeed
//         },
//         this.changeYear = function (newValue){
//             this.year = newValue;
//         },
//         this.addDriver = function (driverInfo){
//             this.driver = driverInfo;
//         }
//     };
// };

//-створити класс попелюшка з полями ім'я, вік, розмір ноги
//--Створити 10 попелюшок , покласти їх в масив
//--Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//-- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Cinderella{
//     constructor(name, age, size){
//     this.name = name;
//     this.age = age;
//     this.size = size;
//     }; 
// };

// let cinderella1 = new Cinderella('Anastasia', 18, 33);
// let cinderella2 = new Cinderella('Drizella', 19, 34);
// let cinderella3 = new Cinderella('Anna', 20, 35);
// let cinderella4 = new Cinderella('Susy', 21, 36);
// let cinderella5 = new Cinderella('Kristie', 22, 37);
// let cinderella6 = new Cinderella('Ella', 23, 38);
// let cinderella7 = new Cinderella('Karoline', 24, 39);
// let cinderella8 = new Cinderella('Nicky', 25, 40);
// let cinderella9 = new Cinderella('Nelly', 26, 41);
// let cinderella10 = new Cinderella('Minnie', 27, 42);

// let allCinderells = [
//     cinderella1, cinderella2, cinderella3, cinderella4, cinderella5,
//     cinderella6, cinderella7, cinderella8, cinderella9,cinderella10
// ];

// class Prince{
//     constructor(name, age, slipper){
//         this.name = name;
//         this.age = age;
//         this.slipper = slipper;
//     };

// findCinderella(allCinderells){
//     let trueCinderella = null;
//         for (let cinderella of allCinderells){
//             if(cinderella.size === this.slipper){
//              trueCinderella = cinderella;
//                 console.log(trueCinderella.name);
//             };
//         };
//     };
// }

// let prince = new Prince('Charming', 20, 38);
// prince.findCinderella(allCinderells);

//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
//--Створити 10 попелюшок , покласти їх в масив
//--Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
//-- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

function allCinderellas (name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
};

function createPrince(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
        this.findNewCinderella = function(allCinderells){
            let realCinderella = null;
                for (let cinderella of allCinderells){
                    if(cinderella.size === this.slipper){
                     realCinderella = cinderella;
                        console.log(realCinderella.name);
                    };
            };
        };
};

let cinderella1 = new allCinderellas('Anastasia', 18, 33);
let cinderella2 = new allCinderellas('Drizella', 19, 34);
let cinderella3 = new allCinderellas('Anna', 20, 35);
let cinderella4 = new allCinderellas('Susy', 21, 36);
let cinderella5 = new allCinderellas('Kristie', 22, 37);
let cinderella6 = new allCinderellas('Ella', 23, 38);
let cinderella7 = new allCinderellas('Karoline', 24, 39);
let cinderella8 = new allCinderellas('Nicky', 25, 40);
let cinderella9 = new allCinderellas('Nelly', 26, 41);
let cinderella10 = new allCinderellas('Minnie', 27, 42);

let allCinderells = [
    cinderella1, cinderella2, cinderella3, cinderella4, cinderella5,
    cinderella6, cinderella7, cinderella8, cinderella9,cinderella10
];

let newPrince = new createPrince('Charming', 20, 38);
newPrince.findNewCinderella(allCinderells);







